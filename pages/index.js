import Head from "next/head";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>My Resume Website</title>
			</Head>
			<Topbar />
			<div className="d-flex flex-column align-items-center px-4">
				<Navbar />
				<div
					class="d-flex w-100 justify-content-center px-0 pb-4"
					style={{ maxWidth: "56rem" }}
				>
					<div className="mt-3 w-100 p-3 d-flex flex-column gap-3">
						<div className="d-flex align-items-center gap-5 px-4">
							<div style={{ width: "15%" }}>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png"
									width="100%"
								/>
							</div>
							<div
								className="progress"
								style={{
									width: "85%",
									border: "1px solid rgba(0, 0, 0, 0.1)",
								}}
							>
								<div
									className="progress-bar"
									style={{
										backgroundColor: "rgb(180, 180, 180)",
										width: "70%",
									}}
									role="progressbar"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						<div className="d-flex align-items-center gap-5 px-4">
							<div style={{ width: "15%" }}>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
									width="100%"
								/>
							</div>
							<div
								className="progress"
								style={{
									width: "85%",
									border: "1px solid rgba(0, 0, 0, 0.1)",
								}}
							>
								<div
									className="progress-bar"
									style={{
										backgroundColor: "rgb(180, 180, 180)",
										width: "50%",
									}}
									role="progressbar"
									aria-valuenow="50"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						<div className="d-flex align-items-center gap-5 px-4">
							<div style={{ width: "15%" }}>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
									width="100%"
								/>
							</div>
							<div
								className="progress"
								style={{
									width: "85%",
									border: "1px solid rgba(0, 0, 0, 0.1)",
								}}
							>
								<div
									className="progress-bar"
									style={{
										backgroundColor: "rgb(180, 180, 180)",
										width: "80%",
									}}
									role="progressbar"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						<div className="d-flex align-items-center gap-5 px-4">
							<div style={{ width: "15%" }}>
								<img
									src="https://designil.com/wp-content/uploads/2021/09/4_2048px-HTML5_logo_and_wordmark.svg.png"
									width="100%"
								/>
							</div>
							<div
								className="progress"
								style={{
									width: "85%",
									border: "1px solid rgba(0, 0, 0, 0.1)",
								}}
							>
								<div
									className="progress-bar"
									style={{
										backgroundColor: "rgb(180, 180, 180)",
										width: "90%",
									}}
									role="progressbar"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						<div className="d-flex align-items-center gap-5 px-4">
							<div
								style={{ width: "15%" }}
								className="text-center"
							>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
									width="75%"
								/>
							</div>
							<div
								className="progress"
								style={{
									width: "85%",
									border: "1px solid rgba(0, 0, 0, 0.1)",
								}}
							>
								<div
									className="progress-bar"
									style={{
										backgroundColor: "rgb(180, 180, 180)",
										width: "80%",
									}}
									role="progressbar"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						<div className="d-flex align-items-center gap-5 px-4">
							<div style={{ width: "15%" }}>
								<img
									src="https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2826/2018/12/1_6kK9j74vyOmXYm1gN6ARhQ.png"
									width="100%"
								/>
							</div>
							<div
								className="progress"
								style={{
									width: "85%",
									border: "1px solid rgba(0, 0, 0, 0.1)",
								}}
							>
								<div
									className="progress-bar"
									style={{
										backgroundColor: "rgb(180, 180, 180)",
										width: "60%",
									}}
									role="progressbar"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
						<div className="d-flex align-items-center gap-5 px-4">
							<div style={{ width: "15%" }}>
								<img
									src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
									width="100%"
								/>
							</div>
							<div
								className="progress"
								style={{
									width: "85%",
									border: "1px solid rgba(0, 0, 0, 0.1)",
								}}
							>
								<div
									className="progress-bar"
									style={{
										backgroundColor: "rgb(180, 180, 180)",
										width: "20%",
									}}
									role="progressbar"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
