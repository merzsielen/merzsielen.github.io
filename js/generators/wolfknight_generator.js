function GetRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function PointRollD6() {
	j = GetRandomInt(6)
	if (j == 5) return 2
	else if (j == 3 || j == 4) return 1
	return 0
}

function PointRollD6s(num) {
	sum = 0;
	for (let i = 0; i < num; i++) {
		j = GetRandomInt(6)
		if (j == 5) sum = sum + 2
		else if (j == 3 || j == 4) sum = sum + 1
	}
	return sum;
}

function RollWK() {
    document.getElementById("attribute_v").innerHTML = PointRollD6() + 1;
    document.getElementById("attribute_i").innerHTML = PointRollD6() + 1;
    document.getElementById("attribute_c").innerHTML = PointRollD6() + 1;
    document.getElementById("guard_e").innerHTML = PointRollD6s(3) + 4;
    document.getElementById("guard_w").innerHTML = PointRollD6s(3) + 4;
}