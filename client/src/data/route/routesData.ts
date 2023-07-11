import pageIcons from "@/shared/utils/pageIcons";
import { IconType } from "react-icons";

export type TRoutesData = {
  label:string,
  path:string,
  Icon:IconType
  subRoutes?:[]
}

const routesData:TRoutesData[]= [
    { label: 'Home', path: '/', Icon:pageIcons.Grid },
    { label: 'Receitas e Exames', path: '/docs', Icon:pageIcons.Docs},
    { label: 'Perfil', path: '/profile', Icon:pageIcons.User},
    { label: 'Dicas de saúde', path:'/health-tips', Icon:pageIcons.Tips},
    { label: 'Notificação', path:'/notification', Icon:pageIcons.Bell},
    { label: 'Configurações', path:'/config', Icon:pageIcons.Settings}
];

export default routesData;
  