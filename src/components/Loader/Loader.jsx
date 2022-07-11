import { Circles} from 'react-loader-spinner';
import s from './Loader.module.css'
export const Loader = () => {
  return (
    <div className={s.loader}>
      <Circles color="#3f51b5" height={80} width={80} />
    </div>
  );
};