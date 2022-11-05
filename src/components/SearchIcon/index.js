import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export default ({ size, color }) => {
    const theme = useTheme()

    return (
      <AntDesign
        name="search1"
        size={size || theme.sizes.LX}
        color={color || theme.colors.text}
      />
    )
  }