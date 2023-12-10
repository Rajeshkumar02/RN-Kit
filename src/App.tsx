import {ScrollView} from 'react-native';
import Text from './components/atoms/text';
import {Button} from './components/atoms/button';
import Icons from './components/atoms/icon';

export default function App() {
  return (
    <ScrollView style={{paddingHorizontal: 30}}>
      <Text>Text</Text>
      <Text
        color="green"
        fz={'md'}
        sx={{fontWeight: '800'}}
        maxLine={1}
        truncatePossition="tail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident
        eos fugiat id necessitatibus magni ducimus molestias. Placeat,
        consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint
        itaque sunt laborum. Nihil?
      </Text>
      <Text>Button</Text>
      <Button
        // variant="filled"
        radius={'md'}
        onClick={() => {
          console.log('Onclick');
        }}
        onLongPress={() => {
          console.log('On Long Press');
        }}
        rightIcon={<Icons family="Entypo" icon="eye" color="#fff" size={20} />}
        leftIcon={<Icons family="Entypo" icon="eye" color="#fff" size={20} />}
        justify="space-between"
        // color="blue"
      >
        Send File
      </Button>
    </ScrollView>
  );
}
