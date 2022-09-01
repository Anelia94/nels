import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';

const Logout = () => {
    const { value, setValue } = useContext(UserContext);

    useEffect(() => {
        setValue('');
    }, []);
}

export default Logout;