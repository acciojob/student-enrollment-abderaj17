const enrollmentData = {
  enrollmentData: [
    { student: "Alice", course: "Math" },
    { student: "Bob", course: "Math" },
    { student: "Charlie", course: "English" },
    { student: "David", course: "Science" },
    { student: "Eve", course: "Math" },
    { student: "Frank", course: "English" },
  ],
};

// complete this function
async function calculateEnrollment() {
	let courseCount = {};
	
	for(let i = 0; i < enrollmentData.enrollmentData.length; i++){
		let course = enrollmentData.enrollmentData[i].course;
		if(courseCount[course]){
			courseCount[course]++;
		}else
		{
			courseCount[course] = 1;
		}
	}
	return courseCount;
}

console.log(calculateEnrollment());
