import { Box, Grid, Heading } from '@chakra-ui/react'
import ImageModal from './ImageModal'

const images = [
	'julia-koblitz-SPzzE4TYxZ0-unsplash.jpg',
	'julia-koblitz-Bfr3JzgG9_4-unsplash.jpg',
	'chad-stembridge-V2bG_Z_IpN0-unsplash.jpg',
	'diego-luengo-f-_Z6rrrziVPs-unsplash.jpg',
	'gozha-net-xDrxJCdedcI-unsplash.jpg',
	'heiko-janowski-XLmWt913EOc-unsplash.jpg',
	'priscilla-gyamfi-jjYTZkKeiAY-unsplash.jpg',
	'walter-sturn-Rd8FuyvGRGY-unsplash.jpg',
	'chris-ensminger-yJDZTDeHeG8-unsplash.jpg',
]

const App = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				margin: '0 10%',
			}}
		>
			<Heading as="h1">Ainoastaan faneille</Heading>
			<Grid gap={2} templateColumns={{ lg: '1fr 1fr 1fr', base: '1fr 1fr' }}>
				{images.map((image) => (
					<ImageModal src={image} />
				))}
			</Grid>
		</Box>
	)
}

export default App
