import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const ReportedProductTable = ({reporteditem}) => {
    const {user} = useContext(AuthContext)
    const {name, sellername, report, picture } = reporteditem;

    return (
        <>
        {
            report && <tr className="hover">
            <td>
            <div className="avatar">
                <div className="w-24 rounded">
                    <img src={picture} alt="" />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{sellername}</td>
          </tr>
        }
        </>
    );
};

export default ReportedProductTable;