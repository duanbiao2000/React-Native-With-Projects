// 导入React Native的View组件，用于构建原生UI
import { View } from "react-native";
// 导入自定义组件NameComponent，用于显示或编辑姓名
import NameComponent from "../components/NameComponent";
// 导入自定义组件AgeComponent，用于显示或编辑年龄
import AgeComponent from "../components/AgeComponent";
// 导入自定义组件XHandleComponent，用于处理特定的X轴操作
import XHandleComponent from "../components/XHandleComponent";
// 导入自定义组件FavSubjectComponent，用于显示或编辑最喜欢的科目
import FavSubjectComponent from "../components/FavSubjectComponent";

const Index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavSubjectComponent />
    </View>
  );
};

export default Index;
