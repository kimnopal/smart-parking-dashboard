// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';

export default function Default(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name: string;
  growth?: string | number;
  value: string | number;
}) {
  const { startContent, endContent, name, growth, value } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';

  return (
    <Card py="15px">
      <Flex
        my="auto"
        flexDirection={'column'}
        h="500px"
        align={{ base: 'center', xl: 'center' }}
        justify={{ base: 'center', xl: 'center' }}
      >
        <Flex
          flexDirection={'column'}
          align={'center'}
          justify={'center'}
          gap={'15px'}
        >
          {startContent}

          <Text
            my="auto"
            mb={'30px'}
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: '2xl',
            }}
          >
            {name}
          </Text>
        </Flex>
        <Flex>
          <Text
            color={textColor}
            fontSize={{
              base: 'xxx-large',
            }}
            fontWeight={'bold'}
            h={'fit-content'}
          >
            {value}
          </Text>
        </Flex>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
