import React ,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks'
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItem] = useState([]);
  handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItem([...taskItems, task])
    //setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }

  return (
    <View style={styles.container}>
     {/* ToDay's Tasks */}
     <View style={styles.tasksWrapper}>
     <Text style={styles.sectionTitle}>ToDay's Tasks</Text>
     
     <View style={styles.items}>
     {/* Tasks */}
      {
        taskItems.map((item, index)=> {
         return (
           <TouchableOpacity key={index} onPress={()=> completeTask()}>
         <Tasks text = {item}/>
         </TouchableOpacity>
         )
        })
      }

     {/* <Tasks text = "Task 1"/>
     <Tasks  text = "Task 2"/> */}

     </View>
     </View>
     
     {/* Write a Task */}
     
     <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     style = {styles.writeTaskWrapper}
     >
       <TextInput style = {styles.input} placeholder= {'Write a task'} onChangeText={text => setTask(text)}/>
       
       <TouchableOpacity onPress={()=> handleAddTask()}>
         <View style={styles.addWrapper}>
           <Text style={styles.addText}>+</Text>
         </View>
       </TouchableOpacity>

     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight:'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
input:{
  paddingHorizontal:15,
  paddingVertical:15,
  backgroundColor: "#FFF",
  borderRadius:60,
  borderColor: '#0C0C0C',
  borderWidth:1,
  width:250
},
  addWrapper:{
    width:60,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    borderRadius:60,
    borderColor: '#0C0C0C',
    borderWidth:1,
  },
addText:{}
});
