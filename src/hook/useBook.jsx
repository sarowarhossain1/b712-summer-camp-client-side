import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useBook = () =>{
const {user} = useContext(AuthContext);

const { refetch, data: book= [] } = useQuery({
    queryKey: ['book', user?.email],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/books?email=${user?.email}`)
        return res.json();
    },
  })
  return [book, refetch]

}
export default useBook;