// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Context extends ethereum.Event {
  get params(): Context__Params {
    return new Context__Params(this);
  }
}

export class Context__Params {
  _event: Context;

  constructor(event: Context) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get context(): Array<Array<BigInt>> {
    return this._event.parameters[1].value.toBigIntMatrix();
  }
}

export class FlowInitialized extends ethereum.Event {
  get params(): FlowInitialized__Params {
    return new FlowInitialized__Params(this);
  }
}

export class FlowInitialized__Params {
  _event: FlowInitialized;

  constructor(event: FlowInitialized) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get interpreter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get dispatch(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Initialize extends ethereum.Event {
  get params(): Initialize__Params {
    return new Initialize__Params(this);
  }
}

export class Initialize__Params {
  _event: Initialize;

  constructor(event: Initialize) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get config(): InitializeConfigStruct {
    return changetype<InitializeConfigStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class InitializeConfigStruct extends ethereum.Tuple {
  get stateConfig(): InitializeConfigStateConfigStruct {
    return changetype<InitializeConfigStateConfigStruct>(this[0].toTuple());
  }

  get flowConfig(): InitializeConfigFlowConfigStruct {
    return changetype<InitializeConfigFlowConfigStruct>(this[1].toTuple());
  }
}

export class InitializeConfigStateConfigStruct extends ethereum.Tuple {
  get sources(): Array<Bytes> {
    return this[0].toBytesArray();
  }

  get constants(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class InitializeConfigFlowConfigStruct extends ethereum.Tuple {
  get expressionDeployer(): Address {
    return this[0].toAddress();
  }

  get interpreter(): Address {
    return this[1].toAddress();
  }

  get flows(): Array<InitializeConfigFlowConfigFlowsStruct> {
    return this[2].toTupleArray<InitializeConfigFlowConfigFlowsStruct>();
  }
}

export class InitializeConfigFlowConfigFlowsStruct extends ethereum.Tuple {
  get sources(): Array<Bytes> {
    return this[0].toBytesArray();
  }

  get constants(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Flow__previewFlowResultValue0Struct extends ethereum.Tuple {
  get native(): Array<Flow__previewFlowResultValue0NativeStruct> {
    return this[0].toTupleArray<Flow__previewFlowResultValue0NativeStruct>();
  }

  get erc20(): Array<Flow__previewFlowResultValue0Erc20Struct> {
    return this[1].toTupleArray<Flow__previewFlowResultValue0Erc20Struct>();
  }

  get erc721(): Array<Flow__previewFlowResultValue0Erc721Struct> {
    return this[2].toTupleArray<Flow__previewFlowResultValue0Erc721Struct>();
  }

  get erc1155(): Array<Flow__previewFlowResultValue0Erc1155Struct> {
    return this[3].toTupleArray<Flow__previewFlowResultValue0Erc1155Struct>();
  }
}

export class Flow__previewFlowResultValue0NativeStruct extends ethereum.Tuple {
  get from(): Address {
    return this[0].toAddress();
  }

  get to(): Address {
    return this[1].toAddress();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }
}

export class Flow__previewFlowResultValue0Erc20Struct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get from(): Address {
    return this[1].toAddress();
  }

  get to(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class Flow__previewFlowResultValue0Erc721Struct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get from(): Address {
    return this[1].toAddress();
  }

  get to(): Address {
    return this[2].toAddress();
  }

  get id(): BigInt {
    return this[3].toBigInt();
  }
}

export class Flow__previewFlowResultValue0Erc1155Struct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get from(): Address {
    return this[1].toAddress();
  }

  get to(): Address {
    return this[2].toAddress();
  }

  get id(): BigInt {
    return this[3].toBigInt();
  }

  get amount(): BigInt {
    return this[4].toBigInt();
  }
}

export class Flow__previewFlowInputSignedContexts_Struct extends ethereum.Tuple {
  get signer(): Address {
    return this[0].toAddress();
  }

  get signature(): Bytes {
    return this[1].toBytes();
  }

  get context(): Array<BigInt> {
    return this[2].toBigIntArray();
  }
}

export class Flow extends ethereum.SmartContract {
  static bind(address: Address): Flow {
    return new Flow("Flow", address);
  }

  multicall(data: Array<Bytes>): Array<Bytes> {
    let result = super.call("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);

    return result[0].toBytesArray();
  }

  try_multicall(data: Array<Bytes>): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("multicall", "multicall(bytes[]):(bytes[])", [
      ethereum.Value.fromBytesArray(data)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  previewFlow(
    dispatch_: BigInt,
    callerContext_: Array<BigInt>,
    signedContexts_: Array<Flow__previewFlowInputSignedContexts_Struct>
  ): Flow__previewFlowResultValue0Struct {
    let result = super.call(
      "previewFlow",
      "previewFlow(uint256,uint256[],(address,bytes,uint256[])[]):(((address,address,uint256)[],(address,address,address,uint256)[],(address,address,address,uint256)[],(address,address,address,uint256,uint256)[]))",
      [
        ethereum.Value.fromUnsignedBigInt(dispatch_),
        ethereum.Value.fromUnsignedBigIntArray(callerContext_),
        ethereum.Value.fromTupleArray(signedContexts_)
      ]
    );

    return changetype<Flow__previewFlowResultValue0Struct>(result[0].toTuple());
  }

  try_previewFlow(
    dispatch_: BigInt,
    callerContext_: Array<BigInt>,
    signedContexts_: Array<Flow__previewFlowInputSignedContexts_Struct>
  ): ethereum.CallResult<Flow__previewFlowResultValue0Struct> {
    let result = super.tryCall(
      "previewFlow",
      "previewFlow(uint256,uint256[],(address,bytes,uint256[])[]):(((address,address,uint256)[],(address,address,address,uint256)[],(address,address,address,uint256)[],(address,address,address,uint256,uint256)[]))",
      [
        ethereum.Value.fromUnsignedBigInt(dispatch_),
        ethereum.Value.fromUnsignedBigIntArray(callerContext_),
        ethereum.Value.fromTupleArray(signedContexts_)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Flow__previewFlowResultValue0Struct>(value[0].toTuple())
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class FlowCall extends ethereum.Call {
  get inputs(): FlowCall__Inputs {
    return new FlowCall__Inputs(this);
  }

  get outputs(): FlowCall__Outputs {
    return new FlowCall__Outputs(this);
  }
}

export class FlowCall__Inputs {
  _call: FlowCall;

  constructor(call: FlowCall) {
    this._call = call;
  }

  get dispatch_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get callerContext_(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get signedContexts_(): Array<FlowCallSignedContexts_Struct> {
    return this._call.inputValues[2].value.toTupleArray<
      FlowCallSignedContexts_Struct
    >();
  }
}

export class FlowCall__Outputs {
  _call: FlowCall;

  constructor(call: FlowCall) {
    this._call = call;
  }
}

export class FlowCallSignedContexts_Struct extends ethereum.Tuple {
  get signer(): Address {
    return this[0].toAddress();
  }

  get signature(): Bytes {
    return this[1].toBytes();
  }

  get context(): Array<BigInt> {
    return this[2].toBigIntArray();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get config_(): InitializeCallConfig_Struct {
    return changetype<InitializeCallConfig_Struct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCallConfig_Struct extends ethereum.Tuple {
  get stateConfig(): InitializeCallConfig_StateConfigStruct {
    return changetype<InitializeCallConfig_StateConfigStruct>(
      this[0].toTuple()
    );
  }

  get flowConfig(): InitializeCallConfig_FlowConfigStruct {
    return changetype<InitializeCallConfig_FlowConfigStruct>(this[1].toTuple());
  }
}

export class InitializeCallConfig_StateConfigStruct extends ethereum.Tuple {
  get sources(): Array<Bytes> {
    return this[0].toBytesArray();
  }

  get constants(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class InitializeCallConfig_FlowConfigStruct extends ethereum.Tuple {
  get expressionDeployer(): Address {
    return this[0].toAddress();
  }

  get interpreter(): Address {
    return this[1].toAddress();
  }

  get flows(): Array<InitializeCallConfig_FlowConfigFlowsStruct> {
    return this[2].toTupleArray<InitializeCallConfig_FlowConfigFlowsStruct>();
  }
}

export class InitializeCallConfig_FlowConfigFlowsStruct extends ethereum.Tuple {
  get sources(): Array<Bytes> {
    return this[0].toBytesArray();
  }

  get constants(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}