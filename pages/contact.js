import React from "react";
import Head from "next/head";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
export default function contact() {
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
					<div
						className="bg-white shadow d-flex"
						style={{
							height: "20rem",
							width: "100%",
							marginTop: "1rem",
						}}
					>
						<div className="d-flex flex-column h-100 w-100 justify-content-center ps-4 contact">
							<div className="d-flex w-100">
								<div className="fw-semibold w-25">
									<p>Name</p>
								</div>
								<div className="w-75">
									<p>Jirapat Promta</p>
								</div>
							</div>

							<div className="d-flex w-100">
								<div className="fw-semibold w-25">
									<p>Nickname</p>
								</div>
								<div className="w-75">
									<p>Jame</p>
								</div>
							</div>
							<div className="d-flex w-100">
								<div className="fw-semibold w-25">
									<p>Address</p>
								</div>
								<div className="w-75">
									<p>
										(301) 865-9423 12203 Fingerboard Rd
										Monrovia, Maryland(MD), 21770
									</p>
								</div>
							</div>
							<div className="d-flex w-100">
								<div className="fw-semibold w-25">
									<p>Facebook</p>
								</div>
								<div className="w-75">
									<p>
										<a
											href="https://www.facebook.com/jm.jirapat.5/"
											target="_blank"
											className="m-0 p-0"
											rel="noreferrer"
										>
											https://www.facebook.com/jm.jirapat.5/
										</a>
									</p>
								</div>
							</div>
							<div className="d-flex w-100">
								<div className="fw-semibold w-25">
									<p>Email</p>
								</div>
								<div className="w-75">
									<p>
										<a
											href="mailto: jirapat_promta@cmu.ac.th"
											target="_blank"
											className="m-0 p-0"
										>
											jirapat_promta@cmu.ac.th
										</a>
									</p>
								</div>
							</div>
							<div className="d-flex w-100">
								<div className="fw-semibold w-25">
									<p>Phone</p>
								</div>
								<div className="w-75">
									<p>+6680-359-1651</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
