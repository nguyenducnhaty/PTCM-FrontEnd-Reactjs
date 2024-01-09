export type PlanDto = {
    id: string;
    tissueCultureLine: string | undefined;
    batchCode: string | undefined;
    groupCode: string | undefined;
    block: string | undefined;
    phase: string;
    phaseFactor: number;
    phaseInfectionPercentange: string;
    phaseInfectionRate: number;
    phaseInfectionRateUnit: string;
    phaseInfectionRateUnitType: string;
    phaseYear: number;
    phaseWeek: number;
    clusterCustomer: number;
    phaseNumOfBag: number;
    phaseEnvironmentCode: string | undefined;
};

export type TissueCultureLineDto = {
    id: string;
    tissueCode: string;
    tissueName: string;
    tissueDescription: string;
};

export type PhaseDto = {
    id: string;
    phaseCode: string;
    phaseName: string;
    phaseDescription: string | undefined;
};

export type CellCultureGoup = {
    id: string;
    cellGroupCode: string;
    cellGroupName: string;
    cellGroupDescription: string;
};

export type CycleDto = {
    id: string;
    phaseCode: string;
    cycleName: string;
    cycleNumOfWeek: number;
    cycleDescription: string;
};

export type PhaseParamEntity = {
    phaseCode: string;
    phaseName: string;
    numOfWeek: number;
    infectionRate: number;
    phaseFactor: number;
    phaseEnvironment: string;
};

export type ProductionStep = {
    phaseCode: string;
    phaseName: string;
    phaseRate: number;
    infectionRate: number;
    planningRate: number;
    planningWeek: number;
    planningYear: number;
    planningCluster: number;
    planningBags: number;
    planningEnvironment: string;
}
