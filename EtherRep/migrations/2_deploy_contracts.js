module.exports = function(deployer) {
  deployer.deploy(EtherRep);
  deployer.deploy(EtherRepDomain);
  deployer.deploy(EtherRepEnabled);
  deployer.deploy(EtherList);
  deployer.deploy(EtherListEnabled);
  deployer.deploy(Rep);
  deployer.deploy(RepDb);
  deployer.deploy(Permissions);
  deployer.deploy(PermissionsDb);
  deployer.deploy(ContractProvider);
};
