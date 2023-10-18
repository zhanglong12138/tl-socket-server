export interface Mission {
    name: string;
    description: string;
    reward: string;
    status: MissionStatus;
}

export enum MissionStatus {
    NotStarted,
    Started,
    Completed,
    Failed,
}