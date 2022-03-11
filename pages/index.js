import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import products from '../products.json';
import { initiateCheckout } from '../lib/payments';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<ul className={styles.grid}>
					{
						products.map(product => {
							const { title, id, price, description, image } = product;
							return (
								<li key={id} className={styles.card}>
									<a href="#">
										<img src={image} />
										<h3>{title}</h3>
										<p>${price}</p>
										<p>{description}</p>
									</a>
									<button onClick={() => {
										initiateCheckout({
											lineItems: [
												{
													price: id,
													quantity: 1
												}
											]
										})
									}}>Buy Now</button>
								</li>
							)
						})
					}
				</ul>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
