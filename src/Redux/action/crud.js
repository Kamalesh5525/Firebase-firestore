import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
import app from "../../firebaseconfig"

const bd = getFirestore(app)

export const Viewusers = () =>{
    return async (dispatch)=>{

        try{
            const data = collection(bd,'users')
            const userList = await getDocs(data);
            const record = userList.docs.map(doc =>({
                id : doc.id,
                ...doc.data()
            }))
            console.log(record);
            dispatch({
                type : 'viewuser',
                paylod : record
            })
        }catch(err){
            dispatch({
                type :"viewusererr",
                paylod: err,
            });
        }
    }
}
 
   export const addUser = (users) => {
    return async(dispatch) =>{
        try{
            await addDoc(collection(bd,"users"),{
                name: users.name,
                phone: users.phone
            })
            dispatch({
                type : 'addrecord',
            })
        }catch(err){
            dispatch({
                type :'addrecorderr',
                paylod:err,
            }); 
        }
    }
   }

   export const deleteUser = (id) => {
    console.log(id);
    return async (dispatch) =>{
        try {
            let deleteData = await doc(bd,"users",id)
                
           await  deleteDoc(deleteData)
            dispatch({
                type : 'deleteuser',
                paylod : id
            })
        } catch (err){
            dispatch({
                type : 'deleteuser',
                paylod : err
            })
        }
    };
    
   };