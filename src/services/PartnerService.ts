import http from "../http-common";
import IPartnerData from "../types/Partner";

const add = (data: IPartnerData) => {
  return http.post<IPartnerData>(`/program/${data.associatedProgram}/addpartner`, data);
};


const PointsProgramService = {
  add
};

export default PointsProgramService;