import { Player } from './player.model';

export interface TeamLabels{
    labels: string[]
}
export interface TeamAmount{
    teamName: string;
    amount: number;
}
export interface RoleCount{
    roleName: string;
    count: number;
}
export interface RoleAmount{
    roleName: string;
    amount: number;
}
export interface MaxAmountByRolePlayer{
    role: string;
    amount: string
    players: Player[];
}