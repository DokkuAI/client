import { Suspense } from 'react'
import Usage from './Usage'
import Skeleton from '../../ui/Skeleton';
 
 const page = () => {
   return (
     <Suspense fallback={<Skeleton/>}>
       <Usage />
     </Suspense>
   );
 }
 
 export default page