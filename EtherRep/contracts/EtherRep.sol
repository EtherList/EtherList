import "./BasicContract.sol";

contract EtherRep {
  event Rating(address from, address to, uint repPoints, uint newTotalRating);
  event DeployBasicContract(address contractt);

  mapping (address => uint) numRatings;
  mapping (address => uint) reputation;

  function getReputation(address who) returns(uint) {
    return reputation[who];
  }

  function getNumRatings(address who) returns(uint) {
    return numRatings[who];
  }

  function increaseRep(address who) {
    uint repPoints = 10;
    numRatings[who] += 1;
    reputation[who] += repPoints;

    Rating(msg.sender, who, repPoints, reputation[who]);
  }

  function decreaseRep(address who) {
    numRatings[who] += 1;
    uint stdDecriment = 10;
    uint percentDecriment = reputation[who] / 10;
    uint repPoints = stdDecriment > percentDecriment ? stdDecriment : percentDecriment;

    reputation[who] -= repPoints;

    Rating(msg.sender, who, repPoints, reputation[who]);
  }

  function deployBasicContract(address seller, address buyer) returns (address) {
    address c = address(new BasicContract(seller, buyer));
    DeployBasicContract(c);
    return c;
  }
}
