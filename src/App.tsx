import { Flex, Grid, Heading } from '@chakra-ui/react'
import ImageModal from './ImageModal'

const imageData = [
	{
		src: 'julia-koblitz-SPzzE4TYxZ0-unsplash.jpg',
		name: 'John Deere 6930',
	},
	{
		src: 'julia-koblitz-Bfr3JzgG9_4-unsplash.jpg',
		name: 'New Holland Welgerin perävaunulla',
	},
	{
		src: 'chad-stembridge-V2bG_Z_IpN0-unsplash.jpg',
		name: 'John Deere 730',
	},
	{
		src: 'diego-luengo-f-_Z6rrrziVPs-unsplash.jpg',
		name: 'John Deere 2066',
	},
	{
		src: 'gozha-net-xDrxJCdedcI-unsplash.jpg',
		name: 'Heinäkuorma',
	},
	{
		src: 'heiko-janowski-XLmWt913EOc-unsplash.jpg',
		name: 'Massey Ferguson sekä Fendt 820 Hawen perävaunulla',
	},
	{
		src: 'priscilla-gyamfi-jjYTZkKeiAY-unsplash.jpg',
		name: 'Farmall 230',
	},
	{
		src: 'walter-sturn-Rd8FuyvGRGY-unsplash.jpg',
		name: 'Steyr KL 1',
	},
	{
		src: 'chris-ensminger-yJDZTDeHeG8-unsplash.jpg',
		name: 'Claas äestämässä',
	},
]

const App = () => {
	return (
		<Flex margin="10%" direction="column" align="center">
			<Heading as="h1" fontSize="50px" my="20px">
				Ainoastaan faneille
			</Heading>
			<Grid gap={2} templateColumns={{ lg: '1fr 1fr 1fr', base: '1fr 1fr' }}>
				{imageData.map((image) => (
					<ImageModal image={image} />
				))}
			</Grid>
		</Flex>
	)
}

export default App
