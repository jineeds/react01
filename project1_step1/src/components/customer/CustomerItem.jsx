import { Link } from 'react-router-dom';

const CustomerItem = () => {
    return (
        <tr>
            <td> 1 </td>

            <td>
                <Link to=""> title </Link>
            </td>
            <td> name </td>
            <td> date </td>
        </tr>
    );
};

export default CustomerItem;
