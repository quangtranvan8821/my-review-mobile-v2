import { Box, HStack, IconButton, Image, Input, Text, VStack } from 'native-base'
import React, { memo, useState, useLayoutEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import AvatarEntity from '../common/AvatarEntity'
import { TextInput } from 'react-native-gesture-handler'

const Detail = ({ route, navigation }: any) => {
  const [active, setActive] = useState(false)
  const [txt, setTxt] = useState('')
  const value = route.params
  const user = {
    id: 2,
  }

  useLayoutEffect(() => {
    if (value.react) {
      const arr = value.react.map((val: any) => Number(val.id))
      if (arr.includes(user.id)) {
        setActive(true)
      }
    }
  }, [value.react])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <HStack w="full" alignItems={'center'}>
          <Ionicons name="chevron-back-outline" size={33} color="#fff" />
          <AvatarEntity username={value?.created_by?.name} avatar={value?.created_by?.avatar} />
        </HStack>
      ),
    })
  }, [navigation, route])

  return (
    <Box w="full" px={2} mb={2} bgColor="coolGray.200">
      <VStack>
        <Text fontSize="md" mt={1}>
          {value?.content}
        </Text>
      </VStack>

      <VStack>
        <Image
          source={{ uri: value?.image }}
          alt="image"
          width="full"
          height="300"
          maxHeight={400}
          maxWidth="full"
          mt={4}
        />
      </VStack>
      <HStack>
        <VStack w="90%">
          <HStack alignItems={'center'}>
            <IconButton icon={<Ionicons name="heart-outline" size={39} color={`${active ? '#000' : '#644AB5'}`} />} />
            <IconButton icon={<Ionicons name="chatbubble-outline" size={36} color="#644AB5" />} />

            <IconButton icon={<Ionicons name="paper-plane-outline" size={36} color="#644AB5" />} />
          </HStack>
          {value.react.length > 0 && (
            <VStack ml={2} mb={1}>
              <Text color={'gray.400'}>{value.react.length} person like this!</Text>
            </VStack>
          )}
        </VStack>

        <VStack w="10%">
          <IconButton icon={<Ionicons name="bookmark-outline" size={36} color="#644AB5" />} />
        </VStack>
      </HStack>
      <VStack>
        <HStack>
          <Input placeholder="coment.." w="90%" inputMode="text" value={txt} onChangeText={(e) => setTxt(e)} />
          <IconButton />
        </HStack>
      </VStack>
    </Box>
  )
}

export default memo(Detail)