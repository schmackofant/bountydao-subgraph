import { json, JSONValueKind, JSONValue, Bytes, ipfs, log, BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import {
  BountyIssued,
  BountyFulfilled,
  BountyDrained,
  FulfillmentAccepted,
  ContributionAdded,
} from "../generated/StandardBounties/StandardBounties"
import { Account, Bounty, BountyIssuer, BountyApprover, BountyFulfillment, BountyFulfiller, BountyDrainAction, BountyContribution} from "../generated/schema"

function processBountyIPFSData(bounty: Bounty): Bounty {
  let ipfsData = ipfs.cat(bounty.contentCID.toString())
  if (ipfsData) {
    let jsonData = json.try_fromBytes(ipfsData as Bytes);

    if (jsonData.isOk && jsonData.value.kind === JSONValueKind.OBJECT) {
      let bountyDataObj = jsonData.value.toObject();
      let title: JSONValue | null = null;
      let description: JSONValue | null = null;
      let url: JSONValue | null = null;
      let requiresApproval: JSONValue | null = null;
      let fulfillmentAmount: JSONValue | null = null;
      let tokenSymbol: JSONValue | null = null;
      let expectedRevisions: JSONValue | null = null;
      let difficulty: JSONValue | null = null;
      let privateFulfillments: JSONValue | null = null;

      log.info('Getting title from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      title = bountyDataObj.get('title');
      if(title) {
        bounty.title = title.toString();
      }

      log.info('Getting description from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      description = bountyDataObj.get('description');
      if(description) {
        bounty.description= description.toString();
      }

      log.info('Getting webReferenceURL from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      url = bountyDataObj.get('webReferenceURL');
      if(url) {
        bounty.webReferenceURL = url.toString();
      }

      log.info('Getting requiresApproval from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      requiresApproval = bountyDataObj.get('fulfillersNeedApproval');
      if(requiresApproval) {
        bounty.fulfillersNeedApproval = requiresApproval.toBool()
      }

      log.info('Getting tokenSymbol from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      tokenSymbol = bountyDataObj.get('tokenSymbol');
      if(tokenSymbol) {
        bounty.tokenSymbol= tokenSymbol.toString();
      }

      log.info('Getting expectedRevisions from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      expectedRevisions = bountyDataObj.get('expectedRevisions');
      if(expectedRevisions) {
        bounty.expectedRevisions= <i32>expectedRevisions.toI64();
      }

      log.info('Getting difficulty from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      difficulty = bountyDataObj.get('difficulty');
      if(difficulty) {
        bounty.difficulty= difficulty.toString();
      }

      log.info('Getting privateFulfillments from JSON for bounty {}', [
        bounty.id.toString()
      ]);

      privateFulfillments = bountyDataObj.get('privateFulfillments');
      if(privateFulfillments) {
        bounty.privateFulfillments = privateFulfillments.toBool()
      }
    } else {
      log.error('Error parsing IPFS JSON for bounty {}', [
        bounty.id.toString()
      ]);
    }
  } else {
    log.error('Data from IPFS is null for bounty {}. Is this content available and pinned on the IPFS node of TheGraph?', [
      bounty.id.toString()
    ]);
  }

  bounty.save();
  return bounty;
}

function processFulfillmentIPFSData(fulfillment: BountyFulfillment): BountyFulfillment {
  let ipfsData = ipfs.cat(fulfillment.contentCID.toString())
  if (ipfsData) {
    let jsonData = json.try_fromBytes(ipfsData as Bytes);

    if (jsonData.isOk && jsonData.value.kind === JSONValueKind.OBJECT) {
      let FulfillmentDataObj = jsonData.value.toObject();
      let description: JSONValue | null = null;
      let sourceFileName: JSONValue | null = null;
      let sourceFileHash: JSONValue | null = null;
      let sourceDirectoryHash: JSONValue | null = null;
      let fulfillers: JSONValue | null = null;
      let payoutAmounts: JSONValue | null = null;

      description = FulfillmentDataObj.get('description');
      if(description) {
        fulfillment.description = description.toString();
      }

      sourceFileName = FulfillmentDataObj.get('sourceFileName');
      if(sourceFileName) {
        fulfillment.sourceFileName = sourceFileName.toString();
      }

      sourceFileHash = FulfillmentDataObj.get('sourceFileHash');
      if(sourceFileHash) {
        fulfillment.sourceFileHash = sourceFileHash.toString();
      }

      sourceDirectoryHash = FulfillmentDataObj.get('sourceDirectoryHash');
      if(sourceDirectoryHash) {
        fulfillment.sourceDirectoryHash = sourceDirectoryHash.toString();
      }

      fulfillers = FulfillmentDataObj.get('fulfillers');
      payoutAmounts = FulfillmentDataObj.get('payoutAmounts');
      if(fulfillers && payoutAmounts) {
        let fulfillersArray: Array<JSONValue> = fulfillers.toArray()
        let payoutAmountsArray: Array<JSONValue> = payoutAmounts.toArray()

        for (let i = 0; i < fulfillersArray.length; ++i) {
          let fulfiller = createOrFindAccount(fulfillersArray[i].toString());
          let bountyFulfiller = new BountyFulfiller(fulfillment.bounty + "-" + fulfillersArray[i].toString());
          bountyFulfiller.account = fulfiller.id;
          bountyFulfiller.fulfillment = fulfillment.id;
          bountyFulfiller.payoutAmount = BigInt.fromString(payoutAmountsArray[i].toF64().toString())
          bountyFulfiller.save()
        }
      }
    } else {
      log.error('Error parsing IPFS JSON for fulfillment {}', [
        fulfillment.id.toString()
      ]);
    }
  } else {
    log.error('Data from IPFS is null for fulfillment {}. Is this content available and pinned on the IPFS node of TheGraph?', [
      fulfillment.id.toString()
    ]);
  }

  fulfillment.save();
  return fulfillment;
}

export function createOrFindAccount(id: string): Account {
  let account = Account.load(id);
  if (!account) {
    account = new Account(id);
    account.save();
  }
  return account;
}

export function handleBountyIssued(event: BountyIssued): void {
  log.info('creating bounty {} (handleBountyIssued)', [
    event.params._bountyId.toString()
  ]);

  let bounty = new Bounty(event.params._bountyId.toString());
  bounty.contentCID = event.params._data;
  bounty.token = event.params._token.toHexString();
  bounty.creator = event.params._creator.toHexString();
  bounty.deadline = event.params._deadline.toString();
  bounty.createdAt = event.block.timestamp;
  bounty.drainedAmount = BigInt.fromString('0');
  bounty.balance = BigInt.fromString('0');
  bounty.totalAmount = BigInt.fromString('0');
  bounty.save();

  let issuers = event.params._issuers;
  for (let i = 0; i < issuers.length; ++i) {
    let issuer = createOrFindAccount(issuers[i].toHexString());
    let bountyIssuer = new BountyIssuer(event.params._bountyId.toString() + "-" + issuers[i].toHexString());
    bountyIssuer.account = issuers[i].toHexString();
    bountyIssuer.bounty = event.params._bountyId.toString();
    bountyIssuer.save()
  }

  let approvers = event.params._approvers;
  for (let i = 0; i < approvers.length; ++i) {
    let approver = createOrFindAccount(approvers[i].toHexString());
    let bountyApprover = new BountyApprover(event.params._bountyId.toString() + "-" + approvers[i].toHexString());
    bountyApprover.account = approvers[i].toHexString();
    bountyApprover.bounty = event.params._bountyId.toString();
    bountyApprover.save()
  }

  processBountyIPFSData(bounty);
  let account = createOrFindAccount(event.params._creator.toHexString());
}

export function handleBountyFulfilled(event: BountyFulfilled): void {
  log.info('creating bountyFulfillment for bounty {}', [
    event.params._bountyId.toString()
  ]);

  let bountyFulfillment = new BountyFulfillment(event.params._fulfillmentId.toString());
  bountyFulfillment.bounty = event.params._bountyId.toString();
  bountyFulfillment.accepted = false;
  bountyFulfillment.contentCID = event.params._data.toString();
  bountyFulfillment.submitter = event.params._submitter.toHexString();
  bountyFulfillment.createdAt = event.block.timestamp;
  bountyFulfillment.save();

  processFulfillmentIPFSData(bountyFulfillment);
}

export function handleBountyDrained(event: BountyDrained): void {
  log.info('BountyDrained for bounty {}', [
    event.params._bountyId.toString()
  ]);

  let bountyDrain = new BountyDrainAction(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  bountyDrain.bounty = event.params._bountyId.toString()
  let amount: BigInt = event.params._amounts[0]
  bountyDrain.amount = amount
  let drainer = createOrFindAccount(event.params._issuer.toHexString());
  bountyDrain.drainer = drainer.id
  bountyDrain.createdAt = event.block.timestamp;
  bountyDrain.save()

  let bounty = Bounty.load(event.params._bountyId.toString())
  if(bounty) {
    bounty.drainedAmount = bounty.drainedAmount.plus(bountyDrain.amount)
    bounty.balance = bounty.balance.minus(bountyDrain.amount)
    bounty.save()
  }
}

export function handleFulfillmentAccepted(event: FulfillmentAccepted): void {
  log.info('FulfillmentAccepted for bounty {}', [
    event.params._bountyId.toString()
  ]);

  let fulfillment = BountyFulfillment.load(event.params._fulfillmentId.toString())
  if(fulfillment) {
    fulfillment.accepted = true
    fulfillment.save()
  }
}

export function handleContributionAdded(event: ContributionAdded): void {
  log.info('ContributionAdded for bounty {}', [
    event.params._bountyId.toString()
  ]);

  let bountyContribution = new BountyContribution(event.params._contributionId.toString());
  bountyContribution.bounty = event.params._bountyId.toString()
  bountyContribution.amount = event.params._amount
  let contributor = createOrFindAccount(event.params._contributor.toHexString());
  bountyContribution.contributor = contributor.id
  bountyContribution.createdAt = event.block.timestamp;
  bountyContribution.save()


  let bounty = Bounty.load(event.params._bountyId.toString())
  if(bounty) {
    bounty.totalAmount = bounty.totalAmount.plus(event.params._amount)
    bounty.balance = bounty.balance.plus(event.params._amount)
    bounty.save()
  }
}