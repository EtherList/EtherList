import "./ContractProvider.sol";
import "./EtherRepEnabled.sol";

//Base class for contracts; only permits EtherList to call this class
contract EtherListEnabled is EtherRepEnabled {

  //checks if EtherList is the caller
  function isEtherListEnabled() constant returns (bool) {
    if(EREP != 0x0){
      address el = ContractProvider(EREP).contracts("etherlist");
      return msg.sender == el;
    }

    return false;
  }
}
