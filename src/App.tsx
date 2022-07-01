import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

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
			<Typography
				variant="h1"
				sx={{ fontFamily: 'Comic Neue', fontSize: '2rem' }}
			>
				Ainoastaan faneille
			</Typography>
			<ImageList cols={3}>
				{images.map((image) => (
					<ImageListItem key={image}>
						<img src={image} alt="tractor" />
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	)
}

export default App
