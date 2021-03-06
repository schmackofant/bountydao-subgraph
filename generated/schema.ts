// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Bounty extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contentCID", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("totalAmount", Value.fromBigInt(BigInt.zero()));
    this.set("balance", Value.fromBigInt(BigInt.zero()));
    this.set("drainedAmount", Value.fromBigInt(BigInt.zero()));
    this.set("deadline", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("creator", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bounty entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bounty entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bounty", id.toString(), this);
    }
  }

  static load(id: string): Bounty | null {
    return changetype<Bounty | null>(store.get("Bounty", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contentCID(): string {
    let value = this.get("contentCID");
    return value!.toString();
  }

  set contentCID(value: string) {
    this.set("contentCID", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get webReferenceURL(): string | null {
    let value = this.get("webReferenceURL");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set webReferenceURL(value: string | null) {
    if (!value) {
      this.unset("webReferenceURL");
    } else {
      this.set("webReferenceURL", Value.fromString(<string>value));
    }
  }

  get fulfillersNeedApproval(): boolean {
    let value = this.get("fulfillersNeedApproval");
    return value!.toBoolean();
  }

  set fulfillersNeedApproval(value: boolean) {
    this.set("fulfillersNeedApproval", Value.fromBoolean(value));
  }

  get tokenSymbol(): string | null {
    let value = this.get("tokenSymbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenSymbol(value: string | null) {
    if (!value) {
      this.unset("tokenSymbol");
    } else {
      this.set("tokenSymbol", Value.fromString(<string>value));
    }
  }

  get totalAmount(): BigInt {
    let value = this.get("totalAmount");
    return value!.toBigInt();
  }

  set totalAmount(value: BigInt) {
    this.set("totalAmount", Value.fromBigInt(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get drainedAmount(): BigInt {
    let value = this.get("drainedAmount");
    return value!.toBigInt();
  }

  set drainedAmount(value: BigInt) {
    this.set("drainedAmount", Value.fromBigInt(value));
  }

  get categories(): string | null {
    let value = this.get("categories");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set categories(value: string | null) {
    if (!value) {
      this.unset("categories");
    } else {
      this.set("categories", Value.fromString(<string>value));
    }
  }

  get expectedRevisions(): i32 {
    let value = this.get("expectedRevisions");
    return value!.toI32();
  }

  set expectedRevisions(value: i32) {
    this.set("expectedRevisions", Value.fromI32(value));
  }

  get difficulty(): string | null {
    let value = this.get("difficulty");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set difficulty(value: string | null) {
    if (!value) {
      this.unset("difficulty");
    } else {
      this.set("difficulty", Value.fromString(<string>value));
    }
  }

  get privateFulfillments(): boolean {
    let value = this.get("privateFulfillments");
    return value!.toBoolean();
  }

  set privateFulfillments(value: boolean) {
    this.set("privateFulfillments", Value.fromBoolean(value));
  }

  get deadline(): string {
    let value = this.get("deadline");
    return value!.toString();
  }

  set deadline(value: string) {
    this.set("deadline", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get issuers(): Array<string> {
    let value = this.get("issuers");
    return value!.toStringArray();
  }

  set issuers(value: Array<string>) {
    this.set("issuers", Value.fromStringArray(value));
  }

  get approvers(): Array<string> {
    let value = this.get("approvers");
    return value!.toStringArray();
  }

  set approvers(value: Array<string>) {
    this.set("approvers", Value.fromStringArray(value));
  }

  get fulfillments(): Array<string> {
    let value = this.get("fulfillments");
    return value!.toStringArray();
  }

  set fulfillments(value: Array<string>) {
    this.set("fulfillments", Value.fromStringArray(value));
  }

  get drainActions(): Array<string> {
    let value = this.get("drainActions");
    return value!.toStringArray();
  }

  set drainActions(value: Array<string>) {
    this.set("drainActions", Value.fromStringArray(value));
  }

  get contributions(): Array<string> {
    let value = this.get("contributions");
    return value!.toStringArray();
  }

  set contributions(value: Array<string>) {
    this.set("contributions", Value.fromStringArray(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdBounties(): Array<string> {
    let value = this.get("createdBounties");
    return value!.toStringArray();
  }

  set createdBounties(value: Array<string>) {
    this.set("createdBounties", Value.fromStringArray(value));
  }

  get issuedBounties(): Array<string> {
    let value = this.get("issuedBounties");
    return value!.toStringArray();
  }

  set issuedBounties(value: Array<string>) {
    this.set("issuedBounties", Value.fromStringArray(value));
  }

  get approverFor(): Array<string> {
    let value = this.get("approverFor");
    return value!.toStringArray();
  }

  set approverFor(value: Array<string>) {
    this.set("approverFor", Value.fromStringArray(value));
  }

  get bountyFulfillments(): Array<string> {
    let value = this.get("bountyFulfillments");
    return value!.toStringArray();
  }

  set bountyFulfillments(value: Array<string>) {
    this.set("bountyFulfillments", Value.fromStringArray(value));
  }

  get fulfillmentsSubmitted(): Array<string> {
    let value = this.get("fulfillmentsSubmitted");
    return value!.toStringArray();
  }

  set fulfillmentsSubmitted(value: Array<string>) {
    this.set("fulfillmentsSubmitted", Value.fromStringArray(value));
  }

  get bountyDrainActions(): Array<string> {
    let value = this.get("bountyDrainActions");
    return value!.toStringArray();
  }

  set bountyDrainActions(value: Array<string>) {
    this.set("bountyDrainActions", Value.fromStringArray(value));
  }

  get bountyContributions(): Array<string> {
    let value = this.get("bountyContributions");
    return value!.toStringArray();
  }

  set bountyContributions(value: Array<string>) {
    this.set("bountyContributions", Value.fromStringArray(value));
  }
}

export class BountyIssuer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromString(""));
    this.set("bounty", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BountyIssuer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BountyIssuer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BountyIssuer", id.toString(), this);
    }
  }

  static load(id: string): BountyIssuer | null {
    return changetype<BountyIssuer | null>(store.get("BountyIssuer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get bounty(): string {
    let value = this.get("bounty");
    return value!.toString();
  }

  set bounty(value: string) {
    this.set("bounty", Value.fromString(value));
  }
}

export class BountyApprover extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromString(""));
    this.set("bounty", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BountyApprover entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BountyApprover entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BountyApprover", id.toString(), this);
    }
  }

  static load(id: string): BountyApprover | null {
    return changetype<BountyApprover | null>(store.get("BountyApprover", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get bounty(): string {
    let value = this.get("bounty");
    return value!.toString();
  }

  set bounty(value: string) {
    this.set("bounty", Value.fromString(value));
  }
}

export class BountyFulfiller extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromString(""));
    this.set("fulfillment", Value.fromString(""));
    this.set("payoutAmount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BountyFulfiller entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BountyFulfiller entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BountyFulfiller", id.toString(), this);
    }
  }

  static load(id: string): BountyFulfiller | null {
    return changetype<BountyFulfiller | null>(store.get("BountyFulfiller", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get fulfillment(): string {
    let value = this.get("fulfillment");
    return value!.toString();
  }

  set fulfillment(value: string) {
    this.set("fulfillment", Value.fromString(value));
  }

  get payoutAmount(): BigInt {
    let value = this.get("payoutAmount");
    return value!.toBigInt();
  }

  set payoutAmount(value: BigInt) {
    this.set("payoutAmount", Value.fromBigInt(value));
  }
}

export class BountyFulfillment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contentCID", Value.fromString(""));
    this.set("bounty", Value.fromString(""));
    this.set("submitter", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BountyFulfillment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BountyFulfillment entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BountyFulfillment", id.toString(), this);
    }
  }

  static load(id: string): BountyFulfillment | null {
    return changetype<BountyFulfillment | null>(
      store.get("BountyFulfillment", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contentCID(): string {
    let value = this.get("contentCID");
    return value!.toString();
  }

  set contentCID(value: string) {
    this.set("contentCID", Value.fromString(value));
  }

  get bounty(): string {
    let value = this.get("bounty");
    return value!.toString();
  }

  set bounty(value: string) {
    this.set("bounty", Value.fromString(value));
  }

  get submitter(): string {
    let value = this.get("submitter");
    return value!.toString();
  }

  set submitter(value: string) {
    this.set("submitter", Value.fromString(value));
  }

  get accepted(): boolean {
    let value = this.get("accepted");
    return value!.toBoolean();
  }

  set accepted(value: boolean) {
    this.set("accepted", Value.fromBoolean(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get sourceFileName(): string | null {
    let value = this.get("sourceFileName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sourceFileName(value: string | null) {
    if (!value) {
      this.unset("sourceFileName");
    } else {
      this.set("sourceFileName", Value.fromString(<string>value));
    }
  }

  get sourceFileHash(): string | null {
    let value = this.get("sourceFileHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sourceFileHash(value: string | null) {
    if (!value) {
      this.unset("sourceFileHash");
    } else {
      this.set("sourceFileHash", Value.fromString(<string>value));
    }
  }

  get sourceDirectoryHash(): string | null {
    let value = this.get("sourceDirectoryHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sourceDirectoryHash(value: string | null) {
    if (!value) {
      this.unset("sourceDirectoryHash");
    } else {
      this.set("sourceDirectoryHash", Value.fromString(<string>value));
    }
  }

  get fulfillers(): Array<string> {
    let value = this.get("fulfillers");
    return value!.toStringArray();
  }

  set fulfillers(value: Array<string>) {
    this.set("fulfillers", Value.fromStringArray(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class BountyDrainAction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bounty", Value.fromString(""));
    this.set("drainer", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BountyDrainAction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BountyDrainAction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BountyDrainAction", id.toString(), this);
    }
  }

  static load(id: string): BountyDrainAction | null {
    return changetype<BountyDrainAction | null>(
      store.get("BountyDrainAction", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bounty(): string {
    let value = this.get("bounty");
    return value!.toString();
  }

  set bounty(value: string) {
    this.set("bounty", Value.fromString(value));
  }

  get drainer(): string {
    let value = this.get("drainer");
    return value!.toString();
  }

  set drainer(value: string) {
    this.set("drainer", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class BountyContribution extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bounty", Value.fromString(""));
    this.set("contributor", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BountyContribution entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BountyContribution entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BountyContribution", id.toString(), this);
    }
  }

  static load(id: string): BountyContribution | null {
    return changetype<BountyContribution | null>(
      store.get("BountyContribution", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bounty(): string {
    let value = this.get("bounty");
    return value!.toString();
  }

  set bounty(value: string) {
    this.set("bounty", Value.fromString(value));
  }

  get contributor(): string {
    let value = this.get("contributor");
    return value!.toString();
  }

  set contributor(value: string) {
    this.set("contributor", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}
