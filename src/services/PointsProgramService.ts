import http from "../http-common";
import IPointsProgramData from "../types/PointsProgram";

const getAll = () => {
  return http.get<Array<IPointsProgramData>>("/program");
};

const get = (id: any) => {
  return http.get<IPointsProgramData>(`/program/${id}`);
};

const create = (data: IPointsProgramData) => {
  return http.post<IPointsProgramData>("/program", data);
};


const PointsProgramService = {
  getAll,
  get,
  create
};

export default PointsProgramService;