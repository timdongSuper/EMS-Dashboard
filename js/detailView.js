$(document).ready(function(){

	var $select = $('#dateSel');	
	var $chart1Title = $('#chart1').parent().find('h4');


    $('.arrow').on('click', function(){
    	window.location.href = "adminview.html";
    });

	var chart1 = c3.generate({
        bindto: '#chart1',
        data:{
            x:'x',
            columns:[
                ['x','12:00AM','01:00AM','02:00AM','03:00AM','04:00AM','05:00AM','06:00AM','07:00AM','08:00AM','09:00AM','10:00AM','11:00AM','12:00AM','01:00PM','02:00PM','03:00PM','04:00PM','05:00PM','06:00PM','07:00PM','08:00PM','09:00PM','10:00PM','11:00PM','12:00AM'],
                ['Total Elevtricity', 0, 0, 0, 0, 0, 0, 3, 7, 15, 16, 19, 20, 25, 22, 21, 16, 18, 11, 10, 5, 0, 0, 0, 0,0],
            ]
        },
        color:{
            pattern:['#ff0b0b']
        },
        grid:{
            y:{
                show:true
            }
        },
        axis:{
            x:{
                type:'category',
                tick:{
                    culling:{
                        max:13
                    }
                }
            }
        }
    });  

    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            columns: [
                ['powersum', 200, 100, 400, 150, 250],
            ],
            types: {
                powersum: 'bar',
            }
        },
        color:{
            pattern:['#ffd80b']
        },
        axis: {
            rotated: true,
        }
    });


	$select.on("change", function(){
		var val = $(this).find("option:selected").text();
		switch(val){
			case 'Day':
				daylyFn();
			break;
			case 'Weekly':
				weeklyFn();
			break;
			case 'Monthly':
				monthlyFn();
			break;
		}
	})
	

	function daylyFn(){
		$chart1Title.text("Hourly Data Electrity");
		chart1.load({
			columns:[
                ['x','12:00AM','01:00AM','02:00AM','03:00AM','04:00AM','05:00AM','06:00AM','07:00AM','08:00AM','09:00AM','10:00AM','11:00AM','12:00AM','01:00PM','02:00PM','03:00PM','04:00PM','05:00PM','06:00PM','07:00PM','08:00PM','09:00PM','10:00PM','11:00PM','12:00AM'],
                ['Total Elevtricity', 0, 0, 0, 0, 0, 0, 3, 7, 15, 16, 19, 20, 25, 22, 21, 16, 18, 11, 10, 5, 0, 0, 0, 0,0],
            ],
            tick:{
                culling:{
                    max:13
                }
            }
		});
	}

	function weeklyFn(){
		$chart1Title.text("Dayly Data Electrity");

		chart1.load({
	        columns: [
	        	['x' ,'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
				['Total Elevtricity', 5, 10, 15, 20, 25, 30, 20],
	        ]
	    });
	}

	function monthlyFn(){
		$chart1Title.text("Weekly Data Electrity");

		chart1.load({
	        columns: [
	        	['x' , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
				['Total Elevtricity', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
	        ]
	    });
	}


});

