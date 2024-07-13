type TyUser = {
	tyfname: string;
	tylname: string;
	tyage: number
}

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

type TyEmployee = {
  name: string;
  startDate: Date;
};

type TyManager = {
  name: string;
  department: string;
};

type TyTeamLead = TyEmployee & TyManager;

const teamLead: TyTeamLead = {
  name: "darsh",
  startDate: new Date(),
  department: "Software developer"
};





