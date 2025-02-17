import { useGetSponsers } from "../../../api/Memeber";


const Tree = () => {
  const {data : sponseredUsers} = useGetSponsers()

  console.log(sponseredUsers)
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      Tree
    </div>
  );
};

export default Tree;
