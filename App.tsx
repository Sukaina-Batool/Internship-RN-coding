
/*import React from 'react';
import  {Text, View, StyleSheet} from 'react-native';
import Exstyles from './style'
const App = ()=>{
  return (
  <View>
    <Text style={{fontSize:35,color:'red', backgroundColor: 'green'}}> Style in React Native </Text>

< Text style={styles.textBox}> style in react native </Text>
< Text style={styles.textBox}> style in react native </Text>
< Text style={styles.textBox}> style in react native </Text>
< Text style={styles.textBox}> style in react native </Text>< Text style={styles.textBox}> style in react native </Text>
< Text style={styles.textBox}> style in react native </Text>
  </View>
  );
  
};
const styles=StyleSheet.create({
  textBox:{
    color:'#fff',
    fontSize:35,
  backgroundColor:'blue',
  marginBottom:10 ,
  padding:10,
  borderRadius:10,
  height: 100,
  textAlignVertical: 'center',
  textAlign: 'center',
borderColor: 'red',
borderWidth:2
}
})

export default App;*/



//-----------------------------------------------------------------------------------------------------------------------------



/*import React, { useState } from 'react';
import  {Text, View,  TextInput, StyleSheet, Button} from 'react-native';

const App = ()=>{
  const[name, setName]= useState(" ")
  return (
    <View>
      <Text style={{fontSize:30}}>Handle text input</Text>
      <Text style={{fontSize:30}}>your name is : {name}</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter Your name'
      value={name}
      onChangeText={(text)=>setName(text)}
      />
      <Button title='clear input value' onPress={()=>setName('')}/>
    </View>
  );
};

const styles=StyleSheet.create({
  textInput: {fontSize:18,
  color:'red',
  borderWidth:2,
  borderColor:'red',
  margin:10}
})

export default App;*/


//------------------------------------------------------------------------------------------------------------------------------


/*import React, { useState } from 'react';
import  {Text, View,  TextInput, StyleSheet, } from 'react-native';

const App = ()=>{
  const[name, setName]= useState(" ")
  const[email, setEmail]= useState(" ")
  const[password, setPassword]= useState(" ")
  return (
    <View>
      <Text style={{fontSize:30}}>Simple form in React native</Text>
      
        <TextInput
      style={styles.textInput}
      placeholder='Enter Username'
      onChangeText={(text)=>setName(text)}
      value={name}
      />
        <TextInput
      style={styles.textInput}
      placeholder='Enter User Password'
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      value={name}
      />
        <TextInput
      style={styles.textInput}
      placeholder='Enter User Emial'
      onChangeText={(text)=>setEmail(text)}
      value={name}
      />
      
      
    </View>
  );
};
const styles=StyleSheet.create({
  textInput: {
  fontSize:18,
  color:'red',
  borderWidth:2,
  borderColor:'red',
  margin:10}
})

export default App;*/


//----------------------------------------------------------------------------------------------------------------------------------------------------

/*import React, {useState} from 'react';
import  {Text, View,  TextInput, StyleSheet, Button} from 'react-native';

const App = ()=>{
  const[name, setName]= useState(" ")
  const[email, setEmail]= useState(" ")
  const[password, setPassword]= useState(" ")
  const[display, setDisplay]= useState(false)

  const resetFormData = ()=>{
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  }
  return (
    <View>
      <Text style={{fontSize:30, color:"black"}}>Simple Form in RN</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter User name'
      onChangeText={(text)=>setName(text)}
      value={name}
       />

     <TextInput
      style={styles.textInput}
      placeholder='Enter User Password'
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      value={password}
       />

      <TextInput
      style={styles.textInput}
      placeholder='Enter User E-mail'
      onChangeText={(text)=>setEmail(text)}
      value={email}
       />
       <View  style={{marginBottom:10}}>
       <Button color={"green"}
       title='print dEtails' 
       onPress={()=>setDisplay(true)}/>
        
       </View>
       <Button title='Clear Detail' onPress={resetFormData}/>
       <View>
        {
        display?
        <View>
          <Text style={{fontSize:15}}>User Nameis: {name} </Text>
          <Text style={{fontSize:15}}>User Password is: {password} </Text>
          <Text style={{fontSize:15}}>User email is: {email} </Text>
        </View>
         : null
        }
       </View>
       
        </View>
  );

  return (
    <View>
      <Text style={{fontSize:30, color:"black"}}>Simple Form in RN</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter User name'
      onChangeText={(text)=>setName(text)}
      value={name}
       />

     <TextInput
      style={styles.textInput}
      placeholder='Enter User Password'
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      value={password}
       />

      <TextInput
      style={styles.textInput}
      placeholder='Enter User E-mail'
      onChangeText={(text)=>setEmail(text)}
      value={email}
       />
       <View  style={{marginBottom:10}}>
       <Button color={"green"}
       title='print dEtails' 
       onPress={()=>setDisplay(true)}/>
        
       </View>
       <Button title='Clear Detail' onPress={resetFormData}/>
       <View>
        {
        display?
        <View>
          <Text style={{fontSize:15}}>User Nameis: {name} </Text>
          <Text style={{fontSize:15}}>User Password is: {password} </Text>
          <Text style={{fontSize:15}}>User email is: {email} </Text>
        </View>
         : null
        }
       </View>
       
        </View>
  );
};


const styles=StyleSheet.create({
  textInput: {
  fontSize:18,
  color:'blue',
  borderWidth:2,
  borderColor:'blue',
  margin:10}
})

export default App; */

//-----------------------------------------------------------------------------------------------------------------------------


/*import React from 'react';

import { FlatList, Text, View, StyleSheet} from 'react-native'
const App = () => {


 const users=[

 {
  id:1, 
  name:"Anil"
 },

 {
  id: 2, 
  name: "Sam"
 },

 {
  id: 3, 
  name: "peter"
 },

 {
  id: 4, 
  name: "Bruce"
   },
 ]
  return (
   <View>
     <Text style={{fontSize:31}}>List with Flat List Component</Text>
     <FlatList
     data={users}
     renderItem={({item})=><Text style={styles.item}>{item.name}</Text>} 
     keyExtractor={item=>item.id.toString()}
     />
   </View>
  );
};

const styles=StyleSheet.create({
  item:{
  fontSize:24,
  padding:10,
  color: "#fff",
  backgroundColor: 'blue',
  borderColor: "black",
  borderWidth:1,
  margin:10
  }
})

export default App;*/



//-------------------------------------------------------------------------------------------------------------------------------

/*import React from 'react';

import { FlatList, Text, View, StyleSheet,ScrollView} from 'react-native'
const App = () => {


 const users=[

 {
  id:1, 
  name:"Anil"
 },

 {
  id: 2, 
  name: "Sam"
 },

 {
  id: 3, 
  name: "peter"
 },

 {
  id: 4, 
  name: "Bruce"
 },

 {
  id: 10, 
  name: "tony"
 },

 {
  id:11, 
  name: "ali"
 },

 {
  id: 12, 
  name: "abn"
 },

 {
  id: 13, 
  name: "dfef"
 },

 {
  id: 14, 
  name: "Bdd"
 },

 ]
 return(
 <View>
 <Text style={{ fontSize: 31 }}>List with map function</Text>
 <ScrollView style={{marginBottom:50}}>
   { 
     users.map((item)=><Text style={styles.item}> {item.name}</Text>)
   } 
  </ScrollView>
  </View>
);
};

const styles=StyleSheet.create({
  item:{
  fontSize:24,
  padding:10,
  color: "#fff",
  backgroundColor: 'blue',
  borderColor: "black",
  borderWidth:1,
  margin:10
  }
})

export default App;*/


//---------------------------------------------------------------------------------------------------------------------------------


/*import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
const App = () => {
  const users = [

    {
      id: 1,
      name: "Anil"
    },

    {
      id: 2,
      name: "Sam"
    },

    {
      id: 3,
      name: "peter"
    },

    {
      id: 4,
      name: "Bruce"
    },

    {
      id: 10,
      name: "tony"
    },

    {
      id: 11,
      name: "ali"
    },

    {
      id: 12,
      name: "abn"
    },

    {
      id: 13,
      name: "dfef"
    },

    {
      id: 14,
      name: "Bdd"
    },

    {
      id: 14,
      name: "Bdd"
    },

    {
      id: 14,
      name: "Bdd"
    },

    {
      id: 12,
      name: "abn"
    },

    {
      id: 13,
      name: "dfef"
    },

    {
      id: 14,
      name: "Bdd"
    },

    {
      id: 14,
      name: "Bdd"
    },

    {
      id: 14,
      name: "Bdd"
    },
 
    {
      id: 14,
      name: "Bdd"
    },

    {
      id: 14,
      name: "Bdd"
    },
  ]
  return (
    <View>
      <Text style={{ fontSize: 31 }}>Grid with Dynamic Data</Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }} >
        {
          users.map((item) => <Text style={styles.item}> {item.name}</Text>)
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: "#fff",
    margin: 6,
    padding: 5,
    width: 100,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})

export default App;*/

//-------------------------------------------------------------------------------------------------------------------


/*import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import UserData from './components/UserData';
const App = () => {
  const users = [

    {
      id: 1,
      name: "Anil",
      email:"anil@gmail.com"
    },

    {
      id: 2,
      name: "Sam",
      email:"sam2334@yahoo.com"
    },

    { 
      id: 3,
      name: "peter",
      email :"peter@gmail.com"
    },

    
  ]
  return (
    <View>
      <Text style={{ fontSize: 27}}>Component in Loop with Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item={item} />}
      />
    </View >
  );
};
export default App;*/

//----------------------------------------------------------------------------------------------------------------------------------

/*import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native'
class App extends Component {
  render() {
    return (
      < View >
        <Text style={{ fontSize: 30, color: 'red' }} >Class Component</Text>
        <TextInput placeholder='Enter your name' />
        <Button title='Press Me' />
      </View >
    )
  }
}
export default App;*/

//---------------------------------------------------------------------------------------------------------------------------------------------


/*import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native'
const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn("Hello")
  }, [])
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Life Cycle with Use effect {count} </Text>
      <Button title='updateCount' onPress={() => setCount(count + 1)} />
    </View>
  )
}

export default App;*/

//---------------------------------------------------------------------------------------------------------------------------------

/*import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native'
const App = () => {
  const [count, setCount] = useState(0); 
  const [data, setData]=useState(100);
 
 useEffect(() => {
    console.warn("do some animation"); 
  }, [count]);

  useEffect(() => {
    console.warn("call some API here"); 
  }, [data]);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{data}useEffect as componentDidUpdate{count}</Text>
      
<Button title='Update Counter' onPress={() =>setCount(count+1)} />
<Button title='Update Data' onPress={() =>setData(data+1)} />
<User info={{data,count}}/> 
</View>
  )
}

const User=(props:any)=>{ 
  console.warn(props.info)
   useEffect(()=>{
    console.warn("run this data when propr is updated:")

},[props.info.data])
return (
<View>
<Text style={{fontSize:30, color: 'orange'}} >data:{props.info.data}</Text>
<Text style={{fontSize:30, color: 'orange'}} >count:{props.info.count} </Text>
</View>
)
}
export default App;*/

//-------------------------------------------------------------------------------------------------------------------------------------

/*import React, { useState } from 'react';
import { Text, View, Button } from 'react-native'
const App = () => {
  const [show, setShow] = useState(true)
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Show/Hide Component</Text>
      <Button title='Hide Component' onPress={() => setShow(!show)} />
      {
        show ? <User /> : null
      }


    </View>
  )
}
const User = () => {
  return (
    <View>
      <Text style={{ fontSize: 38, color: 'green' }} >User Component</Text>
    </View>
  )
}

export default App; */


//--------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native'
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{ fontSize: 30 }}> useEffect for Unmount Component </Text>
      <Button title='Toggle' onPress={() => setShow(!show)} />
      {
        show ? <Student /> : null
      }
    </View>
  )
}

const Student = () => {
  setInterval(() => {
    console.warn("Timer called");
  }, 2000)
useEffect(()=>{
  return()=>{console.warn("useEfect Called on unmount")}
})
  return(
    <View>
    <Text style={{color: 'red', fontSize:30}}>Student</Text>
    </View>
  )
}

export default App;*/

//---------------------------------------------------------------------------------------------------------------------------------


/*
//FlexBOX

import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
const App = () => {
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.InnerBox1}></View>
        <View style={styles.InnerBox2}></View>
        <View style={styles.InnerBox3}></View>
      </View>
      <View style={styles.box2}></ View>
      <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  box1: {
    flex: 2, backgroundColor: 'red', flexDirection: 'row'
  },
  box2: {
    flex: 1, backgroundColor: 'green'
  },
  box3: {
    flex: 1, backgroundColor: "blue"
  },
  InnerBox1: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 10
  },
  InnerBox2: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10
  },
  InnerBox3: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 10
  }
})
export default App;*/


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View style={styles.box}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default App;*/


//-------------------------------------------------------------------------------------------------------------------------------------

/*import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
    <View style={styles.box3}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});

export default App;*/
//--------------------------------------------------------------------------------------------------------------------------------------


/*import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginBottom: 10,
  },
});

export default App;*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


/*
//TouchableHighlights
import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
const App = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },

  button: {
    backgroundColor: '#bbb',
    color: "#fff",
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1
  },

  success: { backgroundColor: 'green' },
  primary: { backgroundColor: 'blue' },
  warning: { backgroundColor: 'gold' },
  error: { backgroundColor: 'red' }

})

export default App;*/


//---------------------------------------------------------------------------------------------------------------------------------------------------

/*import React, { startTransition, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, useAnimatedValue } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { preset } from './jest.config';
const App = () => {
  const [selectedRadio, setSelectedRadio] = useState(1)

  return (
    <View style={styles.main}>
    <TouchableOpacity onPress={() =>setSelectedRadio(1)}>
    <View style={styles.radioWrapper} >
    <View style={styles.radio} >
      {
    selectedRadio===1 ? <View style={styles.radioBg} ></View>:null 
    }
    </View>
    <Text style={styles.radioText}>Radio 1</Text>
    </View >
    </TouchableOpacity >
  <TouchableOpacity onPress={() => setSelectedRadio(2)}>
    <View style={styles.radioWrapper} >
      <View style={styles.radio}>
       {
selectedRadio === 2 ? <View style={styles.radioBg} ></View> : null       
        }
      </View>
      <Text style={styles.radioText}>Radio 2</Text>
  </View>
</TouchableOpacity >
</View >
)
}
const styles = StyleSheet.create({
  main: {
  flex: 1,
  alignItems: 'center', 
  justifyContent: 'center'
  },

  radioText: {
  fontSize: 29,
  Colors:'skyblue'
  },

  radio: {
  height: 40,
  width: 40,
  borderColor: 'black',
  borderWidth: 2,
  borderRadius: 20,
  margin: 10
  },
  radioBg: {
    backgroundColor: 'black',
    height:28,
    width:28, borderRadius:20,
     margin:4
  },
  radioWrapper:{
    flexDirection: 'row',
     alignItems: 'center' }
    
})

export default App;*/

//------------------------------------------------------------------------------------------------------------------------------

/*import React, { useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Button } from 'react-native'

const App = () => {
  const [show, setShow] = useState(false)
 const  displayLoader=()=>{
  setShow(true)
 }
  return (
    <View style={styles.main} >
      { <ActivityIndicator size=(200) color="blue" /> }
      { <ActivityIndicator size="small" color="red" /> }
      <ActivityIndicator size={100} color="green" animating={show}/>
      <Button title='show loader ' onPress={displayLoader} />

    </View>
  )
}
const styles = StyleSheet.create({

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;*/

//----------------------------------------------------------------------------------------------------------------------------------------


/*import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

const DirectionLayout = () => {
  const [direction, setDirection] = useState('ltr');

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={['ltr', 'rtl']}
      setSelectedValue={setDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default DirectionLayout;*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

/*import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      setSelectedValue={setJustifyContent}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default JustifyContentBasics;*/


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      setSelectedValue={setAlignItems}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: 'steelblue',
            width: 'auto',
            minWidth: 50,
          },
        ]}
      />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignItemsLayout;*/



//--------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import type {PropsWithChildren} from 'react';

const RowGapAndColumnGap = () => {
  const [rowGap, setRowGap] = useState(10);
  const [columnGap, setColumnGap] = useState(10);

  return (
    <PreviewLayout
      columnGap={columnGap}
      handleColumnGapChange={setColumnGap}
      rowGap={rowGap}
      handleRowGapChange={setRowGap}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
      <View style={[styles.box, styles.box5]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  columnGap: number;
  handleColumnGapChange: (gap: number) => void;
  rowGap: number;
  handleRowGapChange: (gap: number) => void;
}>;

const PreviewLayout = ({
  children,
  handleColumnGapChange,
  handleRowGapChange,
  rowGap,
  columnGap,
}: PreviewLayoutProps) => (
  <View style={styles.previewContainer}>
    <View style={styles.inputContainer}>
      <View style={styles.itemsCenter}>
        <Text>Row Gap</Text>
        <TextInput
          style={styles.input}
          value={String(rowGap)}
          onChangeText={v => handleRowGapChange(Number(v))}
        />
      </View>
      <View style={styles.itemsCenter}>
        <Text>Column Gap</Text>
        <TextInput
          style={styles.input}
          value={String(columnGap)}
          onChangeText={v => handleColumnGapChange(Number(v))}
        />
      </View>
    </View>
    <View style={[styles.container, {rowGap, columnGap}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  itemsCenter: {alignItems: 'center'},
  inputContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  previewContainer: {padding: 10, flex: 1},
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    maxHeight: 400,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  box: {
    width: 50,
    height: 80,
  },
  box1: {
    backgroundColor: 'orangered',
  },
  box2: {
    backgroundColor: 'orange',
  },
  box3: {
    backgroundColor: 'mediumseagreen',
  },
  box4: {
    backgroundColor: 'deepskyblue',
  },
  box5: {
    backgroundColor: 'mediumturquoise',
  },
});

export default RowGapAndColumnGap;*/


//------------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import type {ViewStyle} from 'react-native';

const App = () => {
  const [powderblue, setPowderblue] = useState<ViewStyle>({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  });
  const [skyblue, setSkyblue] = useState<ViewStyle>({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
  });
  const [steelblue, setSteelblue] = useState<ViewStyle>({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
            alignContent: 'space-between',
          },
        ]}>
        <BoxInfo color="powderblue" {...powderblue} setStyle={setPowderblue} />
        <BoxInfo color="skyblue" {...skyblue} setStyle={setSkyblue} />
        <BoxInfo color="steelblue" {...steelblue} setStyle={setSteelblue} />
      </View>
      <View style={styles.previewContainer}>
        <View
          style={[
            styles.box,
            {
              flexBasis: powderblue.flexBasis,
              flexGrow: powderblue.flexGrow,
              flexShrink: powderblue.flexShrink,
              backgroundColor: 'powderblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              flexBasis: skyblue.flexBasis,
              flexGrow: skyblue.flexGrow,
              flexShrink: skyblue.flexShrink,
              backgroundColor: 'skyblue',
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {
              flexBasis: steelblue.flexBasis,
              flexGrow: steelblue.flexGrow,
              flexShrink: steelblue.flexShrink,
              backgroundColor: 'steelblue',
            },
          ]}
        />
      </View>
    </View>
  );
};

type BoxInfoProps = ViewStyle & {
  color: string;
  setStyle: React.Dispatch<React.SetStateAction<ViewStyle>>;
};

const BoxInfo = ({
  color,
  flexBasis,
  flexShrink,
  setStyle,
  flexGrow,
}: BoxInfoProps) => (
  <View style={[styles.row, {flexDirection: 'column'}]}>
    <View
      style={[
        styles.boxLabel,
        {
          backgroundColor: color,
        },
      ]}>
      <Text
        style={{
          color: '#fff',
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Box
      </Text>
    </View>
    <Text style={styles.label}>flexBasis</Text>
    <TextInput
      value={String(flexBasis)}
      style={styles.input}
      onChangeText={fB =>
        setStyle(value => ({
          ...value,
          flexBasis: isNaN(parseInt(fB, 10)) ? 'auto' : parseInt(fB, 10),
        }))
      }
    />
    <Text style={styles.label}>flexShrink</Text>
    <TextInput
      value={String(flexShrink)}
      style={styles.input}
      onChangeText={fS =>
        setStyle(value => ({
          ...value,
          flexShrink: isNaN(parseInt(fS, 10)) ? undefined : parseInt(fS, 10),
        }))
      }
    />
    <Text style={styles.label}>flexGrow</Text>
    <TextInput
      value={String(flexGrow)}
      style={styles.input}
      onChangeText={fG =>
        setStyle(value => ({
          ...value,
          flexGrow: isNaN(parseInt(fG, 10)) ? undefined : parseInt(fG, 10),
        }))
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  box: {
    flex: 1,
    height: 50,
    width: 50,
  },
  boxLabel: {
    minWidth: 80,
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '100',
  },
  previewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: 'center',
  },
});

export default App;*/


//---------------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet, Text } from 'react-native';
const App =()=>  {
  const [showModal, setShowModal] = useState(false)
  return (
    <View style={styles.main}>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} >
            <Text style={styles.modalText}>Hello Code Step by Step</Text>
<Button title='Close Modal' onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView} >
        <Button title='Open Modal'         onPress={() => setShowModal(true)} />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5
  },
    modalText: {
    fontSize: 30,
    marginBottom: 20
    }
  })

  export default App;*/


//--------------------------------------------------------------------------------------------------------------------------------------------------

/*import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
const App =()=>{
return (
<View style={styles.main} >
<Pressable
onPress={() =>console.warn("normal on press")} 
onLongPress={() => { console.warn("long press")}}
 onPressIn={() => { console.warn("press in")}}
  onPressOut={() => { console.warn("press out")}}
  >
<Text style={styles.pressableBtn} >Pressable</Text>
</Pressable>
</View>
)
}

const styles = StyleSheet.create({
main: {
flex:1,
justifyContent: 'center'
},
pressableBtn: { backgroundColor: 'blue',
color: "#fff",
padding:10,
margin:10,
borderRadius:10,
fontSize:20,
textAlign: 'center',
shadowColor: '#000',
elevation:5
}
})

export default App;*/



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>Temperature: 102°F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 24,
  },
});

export default App;*/


//----------------------------------------------------------------------------------------------------------------------------------------------------------------



/*import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
const App = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState("default");
  return (
    <View style={styles.container} >
      <StatusBar
        backgroundColor="blue"
        barStyle="default"
         hidden={hide}
      />
      <Button title='Toogle Status Bar' onPress={() => setHide(!hide)} />
      <Button title='Update Style' onPress={() => setBarStyle("dark-content")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    JustifyContent: 'center'
  }
});

export default App;*/


//------------------------------------------------------------------------------------------------------------------------------------------------

/*import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
const App = () => {
  return (
    <View >
      <Text style={{ fontSize: 30 }} >Platform:{Platform.OS}</Text>
      {
        Platform.OS == "android" ?
          <View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
          :
          <View style={{ backgroundColor: 'red', height: 100, width: 100 }} ></View>
      }
      <Text style={styles.text}>Hello</Text>
      <Text style={{ fontSize: 20 }}>{JSON.stringify(Platform)} </Text>
    </View >
  );
};

const styles = StyleSheet.create({
  text: {
    color: Platform.OS == "android" ? "orange" : 'blue',
    fontSize: 20
  }
})

export default App;*/


//--------------------------------------------------------------------------------------------------------------------------------------------------

/*
import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
const App =() => {
  const [show, setShow] = useState(false)
  return (<View style={styles.container} >
    {
      show ?
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Some Text</Text>
            <Button title='Close' onPress={() => setShow(false)} />
          </View>
        </View>
        : null
    }
        < Button title='Open Dialog' onPress={() => setShow(true)} />
  </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,.5)',
    JustifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#fff',
    height: 300,
    width:300,
    padding:20,
    justifyContent: 'flex-end',
    borderRadius: 10
  }
})


export default App;*/




//------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='DetailsScreen'
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' ,color:'green'}}>Welcome to Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        color="#3498db"
      />
    </View>
  );
};

const DetailsScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Details Screen</Text>
    </View>
  );
};

export default App;*/



//-----------------------------------------------------------------------------------------------------------------------


/*import React, { useState } from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='SignUp' component={SignUp}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};
const Login = () => {
  return <View>
    <Text>Login</Text>
  </View>
}

const SignUp = () => {
  return <View>
    <Text>SignUp</Text>
  </View>
}

export default App;*/

//--------------------------------------------------------------------------------------------------------------------------------------



/*import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView} from 'react-native';



const App = () => {
  const [data, setData] = useState<any>([]);

  const getAPIData = async () => {
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result)

  }


  useEffect(() => {
    getAPIData();
  }, [])


  return (
  <ScrollView>
    <Text style={{ fontSize: 30 }}>API Call</Text>
    {
      data .length ? 
      data.map((item:any )=><View style={{padding:10, borderBottomColor:'#ccc', borderBottomWidth:1}}>
       <Text style={ {fontSize: 20, backgroundColor: "#ddd" }}> Id: {item.id}</Text>
       <Text style={{ fontSize: 20 }}> Title : {item.title} </Text> 
       <Text style={{ fontSize: 20 }}> Body : {item.body}</Text>

      </View>
      )
      :
      null
    }
  </ScrollView>
  )

};

export default App;*/


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------


import React from 'react';
import { View, Text, StyleSheet,Image, Button, ScrollView } from 'react-native';
import Product from './Redux/Product';
import Header from './Redux/Header';
import jestConfig from './jest.config';



const App = () => {

 const products:any[]=[
  {
    name: 'Samsung Mobile',
    color: 'black',
    price: 30000,
    image:'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },

  {
    name: 'Aple Mobile',
    color: 'white',
    price: 130000,
    image:'https://i.pinimg.com/736x/6e/11/af/6e11af3517edff2ff1aeca18a5a8b9d5.jpg'
  },

  {
    name: 'Nokia Mobile',
    color: 'blue',
    price: 40000,
    image:'https://www.pakmobizone.pk/wp-content/uploads/2022/04/Nokia-G21-Nordic-Blue-6.jpg'
  }
 ]



  return (
    <View style={styles.container}>
      
      <Header />
      <ScrollView>
      {
        products.map((item)=><View style={{alignItems:'center',borderBottomColor:'orange', borderBottomWidth:2,padding:10}}>
        <Text style={{fontSize:24}}>{item.name}</Text>
        <Text style={{fontSize:24}}>{item.price}</Text>
        <Text style={{fontSize:24}}>{item.color}</Text>
        <Image style={{width:200,height: 200}} source={{uri:item.image}}/>
        <Button title='Add to Cart'/>
        </View>)
      }
      
      </ScrollView>
      
      <Product />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}
) 



  
export default App; 

