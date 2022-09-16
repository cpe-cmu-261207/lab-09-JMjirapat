import React from "react";

function Topbar() {
	return (
		<div>
			{" "}
			<nav
				className="bg-white w-100 sticky-top d-flex border-bottom align-items-center justify-content-center"
				style={{ height: "3.7rem" }}
			>
				<div className="w-100 px-4" style={{ maxWidth: "56rem" }}>
					<h1
						className="fs-4 tracking-tight"
						style={{
							fontFamily: "'Sarabun', sans-serif",
							letterSpacing: "-0.05em",
						}}
					>
						𝓙𝓲𝓻𝓪𝓹𝓪𝓽
					</h1>
				</div>
			</nav>
			<div className="d-flex flex-column align-items-center px-4">
				<div
					className="w-100 d-flex mt-4"
					style={{ maxWidth: "56rem" }}
				>
					<div className="d-flex w-100">
						<div
							style={{ width: "30%" }}
							className="d-flex justify-content-center"
						>
							<div className="" style={{ width: "10.5rem" }}>
								<img
									src="./img/profile_img.jpg"
									className="rounded-circle img-fluid"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
						<div style={{ width: "70%" }} className="ps-5">
							<div>
								<span className="fw-lighter fs-2">
									Jirapat Promta
								</span>
							</div>
							<div className="mt-3">
								<div
									className="fs-6 d-inline"
									style={{ marginRight: "2.5rem" }}
								>
									<span className="fw-semibold">7</span>
									<span>skills</span>
								</div>
								<div
									className="fs-6 d-inline"
									style={{ marginRight: "2.5rem" }}
								>
									<span className="fw-semibold">3</span>
									<span>projects</span>
								</div>
								<div
									className="fs-6 d-inline"
									style={{ marginRight: "2.5rem" }}
								>
									<span className="fw-semibold">1</span>
									<span>cats</span>
								</div>
							</div>
							<div className="mt-3">
								<span className="fw-semibold fs-6">
									#jm_jirapat
								</span>
							</div>
							<div className="mt-3">
								<p
									className="fw-lighter fs-6"
									style={{
										textIndent: "0rem",
										fontFamily: "'Sarabun', sans-serif",
									}}
								>
									สวัสดี, ผมชื่อ จิรพัฒน์ พรหมทา.
									ผมกำลังศึกษาที่มหาลัยเชียงใหม่
									คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์.
									ผมชอบเขียนโปรแกรมกำลังค้นหาสายโปรแกรมที่ชอบ
									ณ ตอนนี้กำลังศึกษาเกี่ยวกับ Frontend และ
									Backend.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
