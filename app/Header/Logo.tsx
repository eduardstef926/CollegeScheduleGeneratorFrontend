import Image from 'next/image';
import '../styles/mainpage.scss';
import { useRouter } from 'next/navigation';

const Logo = () => {
	const router = useRouter();
	const returnToHomePage = () => {
		router.push('/');
	}

	return (
		<div onClick={returnToHomePage} className="logo-container">
			<Image
				src='/clock.jpg'
				alt="Description"
				width={40}
				height={40}
			/>
			<p>Circle</p>
		</div>
	);
}

export default Logo;