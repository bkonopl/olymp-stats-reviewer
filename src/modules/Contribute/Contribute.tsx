import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ModuleLayout } from 'src/layouts'
function ContributeCard() {
  const styles = {
    body: {
      display: 'flex',
      backgroundColor: 'blue.900',
      borderRadius: '10px',
      boxShadow: 'box-shadow: 0 0 10px rgba(0,0,0,0.5)',
      padding: '20px',
      alignItems: 'center',
    },
    contacs: {
      marginLeft: '20px',
      display: 'flex',
      justifyContent: 'space-around',
    },
  }
  return (
    <Box paddingY="20px">
      <Flex
        background="blue.900"
        borderRadius="10px"
        boxShadow="box-shadow: 0 0 10px rgba(0,0,0,0.5)"
        padding="20px"
      >
        <img
          height="20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/1200px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png"
          width="60"
        />
        <Text fontSize="4xl" fontWeight="600" ml="15px">
          Ihar Makeenka
        </Text>
        <div style={styles.contacs}>
          <a href="https://github.com/4llower">
            <img height="20" src="https://img.icons8.com/ios/452/github.png" width="60" />
          </a>
          <a href="https://www.linkedin.com/in/ihar-makeyenka/">
            <img height="20" src="https://img.icons8.com/ios/452/linkedin.png" width="60" />
          </a>
          <a href="https://t.me/llower">
            <img height="20" src="https://img.icons8.com/windows/452/telegram-app.png" width="60" />
          </a>
        </div>
      </Flex>
    </Box>
  )
}
function Jopa() {
  const styles = {
    body: {
      display: 'flex',
    },
    tittle: {
      fontSize: '3em',
    },
    askText: {
      fontSize: '2em',
      fontStyle: 'itelic',
    },
    answerText: {
      fontSize: '2em',
      fontStyle: 'oblique',
    },
  }
  return (
    <div style={styles.body}>
      <div>
        <p style={styles.tittle}>Become a contributor to Olymp Stats</p>
        <p style={styles.askText}>Do you like to follow competitive programming?</p>
        <p style={styles.answerText}>- We, too.</p>
        <p style={styles.askText}>Have some fresh ideas?</p>
        <p style={styles.answerText}>- We'd glad to hear them.</p>
        <p style={styles.askText}>Ready to help us with your knowledge?</p>
        <p style={styles.answerText}>- We will be glad to see you in our contributors team.</p>
        <p style={styles.tittle}>Our contributors</p>
        <ContributeCard />
      </div>
    </div>
  )
}
export const Contribute: React.FC = () => {
  return <ModuleLayout>{Jopa()}</ModuleLayout>
}
