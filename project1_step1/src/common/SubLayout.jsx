import { Outlet } from 'react-router-dom';
import SubVisual from './subVisual/SubVisual';

const SubLayout = () => {
    return (
        <div className="">
            <SubVisual />

            <section className="">
                {/* 서브영역들어오는곳 */}
                <Outlet />
            </section>
        </div>
    );
};

export default SubLayout;
