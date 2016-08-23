import "./contractTesting/EtherRepEnabled.sol";

contract EtherRepDomain {
  address owner;
  event AddedContract(bool result, address addr);
  event RemovedContract(bool result, bytes32 name);
  event Removed(bool result);

  //Creates ledger of EtherRepDomain contracts
  mapping (bytes32 => address) public contracts;

  //ensures only the owner accesses the function
  modifier onlyOwner {
    if (msg.sender == owner)
      _
  }

  //Constructor
  function EtherRepDomain(){
    owner = msg.sender;
  }

  //This overwrites any existing contract by same name
  function addContract(bytes32 name, address addr) /*onlyOwner*/ returns (bool result) {
    //Create instance of EtherRepEnabled contract that is called by the contract to be added
    EtherRepEnabled de = EtherRepEnabled(addr);

    //Set EREP variable in EtherRepEnabled to EtherRepDomain's address; alert listener if failure
    if(!de.setEtherRepAddress(address(this))) {
      AddedContract(false, addr);
      return false;
    }

    //Add contract and alert listener
    contracts[name] = addr;
    AddedContract(true, addr);

    //Initialize max reputation fluctuations with default of +10/-1000
    setMaxRepChanges(addr, 10, 1000);
    return true;
  }

  function removeContract(bytes32 name) /*onlyOwner*/ returns (bool result) {
    //If contract does not exist, alert listener of failure
    if (contracts[name] == 0x0){
      RemovedContract(false, name);
      return false;
    }

    //Set contract to undefined and alert listener
    contracts[name] = 0x0;
    RemovedContract(true, name);
    return true;
  }

  //TODO: figure out how to setMaxRepChanges
  function setMaxRepChanges(address addr, uint maxIncrease, uint maxDecrease) onlyOwner returns (bool result) {
    address rep = contracts["rep"];
    // rep.setMaxRepChanges(addr, maxIncrease, maxDecrease);
  }

  function remove() /*onlyOwner*/ {
    address el = contracts["etherlist"];
    address perms = contracts["perms"];
    address permsdb = contracts["permsdb"];
    address rep = contracts["rep"];
    address repdb = contracts["repdb"];

    //Remove all contracts
    if(el != 0x0){ EtherRepEnabled(el).remove(); }
    if(perms != 0x0){ EtherRepEnabled(perms).remove(); }
    if(permsdb != 0x0){ EtherRepEnabled(permsdb).remove(); }
    if(rep != 0x0){ EtherRepEnabled(rep).remove(); }
    if(repdb != 0x0){ EtherRepEnabled(repdb).remove(); }

    //Remove EtherRep
    Removed(true);
    selfdestruct(owner);
  }

}
