import IPartnersData from "./Partners";
import IPointsSettingsData from "./PointsProgramSettings";

export default interface IPointsProgramData {
    id?: any | null,
    type: string,
    name: string,
    description: string,
    entity: string,
    organizer: string,
    email: string,
    created: string,
    modified: string,
    tokenAddress: string,
    tokenName: string,
    tokenSymbol: string,
    image: string,
    partners: Array<IPartnersData>
    settings: IPointsSettingsData
  }