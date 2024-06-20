'use client';
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { Box, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// Custom components
// import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md';
import { useEffect, useState } from 'react';
import mqtt from 'mqtt';

export default function Default() {
  const [slots, setSlots] = useState<string[]>(['kosong', 'kosong', 'kosong']);
  const [slotsInit, setSlotsInit] = useState<boolean>(false);
  // Chakra Color Mode
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  useEffect(() => {
    const mqttClient = mqtt.connect(
      'wss://xe10fd40.ala.asia-southeast1.emqxsl.com:8084/mqtt',
      {
        username: 'admin',
        password: 'admin123',
      },
    );

    mqttClient.on('connect', () => {
      mqttClient.subscribe('test', (err) => {
        if (!err) {
          console.log('subscribed');
        } else {
          console.log(err);
        }
      });
    });

    mqttClient.on('message', async (topic, message) => {
      if (topic == 'test') {
        console.log(message.toString());
        setSlots(message.toString().split(','));
      }
    });
  }, []);

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 3 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Slot 1"
          value={slots[0]}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Slot 2"
          value={slots[1]}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Slot 3"
          value={slots[2]}
        />
      </SimpleGrid>
    </Box>
  );
}
