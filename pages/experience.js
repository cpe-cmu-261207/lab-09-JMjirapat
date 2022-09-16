import React from "react";
import Head from "next/head";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";

export default function experience() {
	return (
		<div>
			<Head>
				<title>My Resume Website</title>
			</Head>
			<Topbar />
			<div className="d-flex flex-column align-items-center px-4">
				<Navbar />
				<div
					className="d-flex w-100 justify-content-center px-0 pb-4"
					style={{ maxWidth: "56rem" }}
				>
					<div className="mt-3 w-100 d-flex flex-wrap px-4">
						<div
							className="bg-white border border-white position-relative"
							style={{ width: "33%", height: "16rem" }}
						>
							<a
								href="https://scratch.mit.edu/projects/558101633/"
								target="_blank"
							>
								<img
									src="https://www.npsrobot.com/wp-content/uploads/2018/05/scratchdl.jpg"
									className="w-100"
								/>
								<div
									className="position-absolute top-0"
									style={{ right: "0.4rem" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-box-arrow-up-right shadow"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
										/>
										<path
											fillRule="evenodd"
											d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
										/>
									</svg>
								</div>
							</a>
						</div>
						<div
							className="border border-white bg-white position-relative"
							style={{ width: "33%", height: "16rem" }}
						>
							<a
								href="https://teachablemachine.withgoogle.com/"
								target="_blank"
							>
								<img
									src="https://i.ytimg.com/vi/T2qQGqZxkD0/maxresdefault.jpg"
									className="w-100 h-100"
									style={{ objectFit: "scale-down" }}
								/>
								<div
									className="position-absolute top-0"
									style={{ right: "0.4rem" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-box-arrow-up-right shadow"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
										/>
										<path
											fillRule="evenodd"
											d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
										/>
									</svg>
								</div>
							</a>
						</div>
						<div
							className="bg-white border border-white position-relative"
							style={{ width: "33%", height: "16rem" }}
						>
							<a
								href="https://github.com/JMjirapat/SCT-calculator"
								target="_blank"
							>
								<img
									src="https://images.idgesg.net/images/article/2019/03/c-plus-plus_code-100790020-large.jpg?auto=webp&quality=85,70"
									className="w-100 h-100"
									style={{ objectFit: "cover" }}
								/>
								<div
									className="position-absolute top-0"
									style={{ right: "0.4rem" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-box-arrow-up-right shadow"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
										/>
										<path
											fillRule="evenodd"
											d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
										/>
									</svg>
								</div>
							</a>
						</div>
						<div
							className="bg-black border border-white position-relative"
							style={{ width: "33%", height: "16rem" }}
						>
							<a href="#">
								<div className="text-white d-flex justify-content-center align-items-center fs-1 w-100 h-100">
									Sample
								</div>

								<div
									className="position-absolute top-0"
									style={{ right: "0.4rem" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-box-arrow-up-right shadow"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
										/>
										<path
											fillRule="evenodd"
											d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
										/>
									</svg>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
