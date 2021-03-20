/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1378.0, "minX": 0.0, "maxY": 18211.0, "series": [{"data": [[0.0, 1378.0], [0.1, 1378.0], [0.2, 1378.0], [0.3, 1378.0], [0.4, 1378.0], [0.5, 1378.0], [0.6, 1378.0], [0.7, 1396.0], [0.8, 1396.0], [0.9, 1396.0], [1.0, 1396.0], [1.1, 1396.0], [1.2, 1396.0], [1.3, 1396.0], [1.4, 2594.0], [1.5, 2594.0], [1.6, 2594.0], [1.7, 2594.0], [1.8, 2594.0], [1.9, 2594.0], [2.0, 2762.0], [2.1, 2762.0], [2.2, 2762.0], [2.3, 2762.0], [2.4, 2762.0], [2.5, 2762.0], [2.6, 2762.0], [2.7, 3495.0], [2.8, 3495.0], [2.9, 3495.0], [3.0, 3495.0], [3.1, 3495.0], [3.2, 3495.0], [3.3, 3495.0], [3.4, 3506.0], [3.5, 3506.0], [3.6, 3506.0], [3.7, 3506.0], [3.8, 3506.0], [3.9, 3506.0], [4.0, 3525.0], [4.1, 3525.0], [4.2, 3525.0], [4.3, 3525.0], [4.4, 3525.0], [4.5, 3525.0], [4.6, 3525.0], [4.7, 3761.0], [4.8, 3761.0], [4.9, 3761.0], [5.0, 3761.0], [5.1, 3761.0], [5.2, 3761.0], [5.3, 3761.0], [5.4, 5287.0], [5.5, 5287.0], [5.6, 5287.0], [5.7, 5287.0], [5.8, 5287.0], [5.9, 5287.0], [6.0, 5821.0], [6.1, 5821.0], [6.2, 5821.0], [6.3, 5821.0], [6.4, 5821.0], [6.5, 5821.0], [6.6, 5821.0], [6.7, 6147.0], [6.8, 6147.0], [6.9, 6147.0], [7.0, 6147.0], [7.1, 6147.0], [7.2, 6147.0], [7.3, 6147.0], [7.4, 6214.0], [7.5, 6214.0], [7.6, 6214.0], [7.7, 6214.0], [7.8, 6214.0], [7.9, 6214.0], [8.0, 6278.0], [8.1, 6278.0], [8.2, 6278.0], [8.3, 6278.0], [8.4, 6278.0], [8.5, 6278.0], [8.6, 6278.0], [8.7, 6332.0], [8.8, 6332.0], [8.9, 6332.0], [9.0, 6332.0], [9.1, 6332.0], [9.2, 6332.0], [9.3, 6332.0], [9.4, 6336.0], [9.5, 6336.0], [9.6, 6336.0], [9.7, 6336.0], [9.8, 6336.0], [9.9, 6336.0], [10.0, 6578.0], [10.1, 6578.0], [10.2, 6578.0], [10.3, 6578.0], [10.4, 6578.0], [10.5, 6578.0], [10.6, 6578.0], [10.7, 6715.0], [10.8, 6715.0], [10.9, 6715.0], [11.0, 6715.0], [11.1, 6715.0], [11.2, 6715.0], [11.3, 6715.0], [11.4, 6738.0], [11.5, 6738.0], [11.6, 6738.0], [11.7, 6738.0], [11.8, 6738.0], [11.9, 6738.0], [12.0, 6772.0], [12.1, 6772.0], [12.2, 6772.0], [12.3, 6772.0], [12.4, 6772.0], [12.5, 6772.0], [12.6, 6772.0], [12.7, 6845.0], [12.8, 6845.0], [12.9, 6845.0], [13.0, 6845.0], [13.1, 6845.0], [13.2, 6845.0], [13.3, 6845.0], [13.4, 6859.0], [13.5, 6859.0], [13.6, 6859.0], [13.7, 6859.0], [13.8, 6859.0], [13.9, 6859.0], [14.0, 6923.0], [14.1, 6923.0], [14.2, 6923.0], [14.3, 6923.0], [14.4, 6923.0], [14.5, 6923.0], [14.6, 6923.0], [14.7, 7059.0], [14.8, 7059.0], [14.9, 7059.0], [15.0, 7059.0], [15.1, 7059.0], [15.2, 7059.0], [15.3, 7059.0], [15.4, 7129.0], [15.5, 7129.0], [15.6, 7129.0], [15.7, 7129.0], [15.8, 7129.0], [15.9, 7129.0], [16.0, 7155.0], [16.1, 7155.0], [16.2, 7155.0], [16.3, 7155.0], [16.4, 7155.0], [16.5, 7155.0], [16.6, 7155.0], [16.7, 7223.0], [16.8, 7223.0], [16.9, 7223.0], [17.0, 7223.0], [17.1, 7223.0], [17.2, 7223.0], [17.3, 7223.0], [17.4, 7243.0], [17.5, 7243.0], [17.6, 7243.0], [17.7, 7243.0], [17.8, 7243.0], [17.9, 7243.0], [18.0, 7288.0], [18.1, 7288.0], [18.2, 7288.0], [18.3, 7288.0], [18.4, 7288.0], [18.5, 7288.0], [18.6, 7288.0], [18.7, 7486.0], [18.8, 7486.0], [18.9, 7486.0], [19.0, 7486.0], [19.1, 7486.0], [19.2, 7486.0], [19.3, 7486.0], [19.4, 7494.0], [19.5, 7494.0], [19.6, 7494.0], [19.7, 7494.0], [19.8, 7494.0], [19.9, 7494.0], [20.0, 7501.0], [20.1, 7501.0], [20.2, 7501.0], [20.3, 7501.0], [20.4, 7501.0], [20.5, 7501.0], [20.6, 7501.0], [20.7, 7564.0], [20.8, 7564.0], [20.9, 7564.0], [21.0, 7564.0], [21.1, 7564.0], [21.2, 7564.0], [21.3, 7564.0], [21.4, 7600.0], [21.5, 7600.0], [21.6, 7600.0], [21.7, 7600.0], [21.8, 7600.0], [21.9, 7600.0], [22.0, 7600.0], [22.1, 7651.0], [22.2, 7651.0], [22.3, 7651.0], [22.4, 7651.0], [22.5, 7651.0], [22.6, 7651.0], [22.7, 7656.0], [22.8, 7656.0], [22.9, 7656.0], [23.0, 7656.0], [23.1, 7656.0], [23.2, 7656.0], [23.3, 7656.0], [23.4, 7739.0], [23.5, 7739.0], [23.6, 7739.0], [23.7, 7739.0], [23.8, 7739.0], [23.9, 7739.0], [24.0, 7739.0], [24.1, 7758.0], [24.2, 7758.0], [24.3, 7758.0], [24.4, 7758.0], [24.5, 7758.0], [24.6, 7758.0], [24.7, 7778.0], [24.8, 7778.0], [24.9, 7778.0], [25.0, 7778.0], [25.1, 7778.0], [25.2, 7778.0], [25.3, 7778.0], [25.4, 7866.0], [25.5, 7866.0], [25.6, 7866.0], [25.7, 7866.0], [25.8, 7866.0], [25.9, 7866.0], [26.0, 7866.0], [26.1, 7880.0], [26.2, 7880.0], [26.3, 7880.0], [26.4, 7880.0], [26.5, 7880.0], [26.6, 7880.0], [26.7, 7896.0], [26.8, 7896.0], [26.9, 7896.0], [27.0, 7896.0], [27.1, 7896.0], [27.2, 7896.0], [27.3, 7896.0], [27.4, 7908.0], [27.5, 7908.0], [27.6, 7908.0], [27.7, 7908.0], [27.8, 7908.0], [27.9, 7908.0], [28.0, 7908.0], [28.1, 7913.0], [28.2, 7913.0], [28.3, 7913.0], [28.4, 7913.0], [28.5, 7913.0], [28.6, 7913.0], [28.7, 8049.0], [28.8, 8049.0], [28.9, 8049.0], [29.0, 8049.0], [29.1, 8049.0], [29.2, 8049.0], [29.3, 8049.0], [29.4, 8052.0], [29.5, 8052.0], [29.6, 8052.0], [29.7, 8052.0], [29.8, 8052.0], [29.9, 8052.0], [30.0, 8052.0], [30.1, 8068.0], [30.2, 8068.0], [30.3, 8068.0], [30.4, 8068.0], [30.5, 8068.0], [30.6, 8068.0], [30.7, 8092.0], [30.8, 8092.0], [30.9, 8092.0], [31.0, 8092.0], [31.1, 8092.0], [31.2, 8092.0], [31.3, 8092.0], [31.4, 8133.0], [31.5, 8133.0], [31.6, 8133.0], [31.7, 8133.0], [31.8, 8133.0], [31.9, 8133.0], [32.0, 8133.0], [32.1, 8170.0], [32.2, 8170.0], [32.3, 8170.0], [32.4, 8170.0], [32.5, 8170.0], [32.6, 8170.0], [32.7, 8186.0], [32.8, 8186.0], [32.9, 8186.0], [33.0, 8186.0], [33.1, 8186.0], [33.2, 8186.0], [33.3, 8186.0], [33.4, 8269.0], [33.5, 8269.0], [33.6, 8269.0], [33.7, 8269.0], [33.8, 8269.0], [33.9, 8269.0], [34.0, 8269.0], [34.1, 8292.0], [34.2, 8292.0], [34.3, 8292.0], [34.4, 8292.0], [34.5, 8292.0], [34.6, 8292.0], [34.7, 8325.0], [34.8, 8325.0], [34.9, 8325.0], [35.0, 8325.0], [35.1, 8325.0], [35.2, 8325.0], [35.3, 8325.0], [35.4, 8476.0], [35.5, 8476.0], [35.6, 8476.0], [35.7, 8476.0], [35.8, 8476.0], [35.9, 8476.0], [36.0, 8476.0], [36.1, 8499.0], [36.2, 8499.0], [36.3, 8499.0], [36.4, 8499.0], [36.5, 8499.0], [36.6, 8499.0], [36.7, 8569.0], [36.8, 8569.0], [36.9, 8569.0], [37.0, 8569.0], [37.1, 8569.0], [37.2, 8569.0], [37.3, 8569.0], [37.4, 8618.0], [37.5, 8618.0], [37.6, 8618.0], [37.7, 8618.0], [37.8, 8618.0], [37.9, 8618.0], [38.0, 8622.0], [38.1, 8622.0], [38.2, 8622.0], [38.3, 8622.0], [38.4, 8622.0], [38.5, 8622.0], [38.6, 8622.0], [38.7, 8685.0], [38.8, 8685.0], [38.9, 8685.0], [39.0, 8685.0], [39.1, 8685.0], [39.2, 8685.0], [39.3, 8685.0], [39.4, 8695.0], [39.5, 8695.0], [39.6, 8695.0], [39.7, 8695.0], [39.8, 8695.0], [39.9, 8695.0], [40.0, 8730.0], [40.1, 8730.0], [40.2, 8730.0], [40.3, 8730.0], [40.4, 8730.0], [40.5, 8730.0], [40.6, 8730.0], [40.7, 8730.0], [40.8, 8730.0], [40.9, 8730.0], [41.0, 8730.0], [41.1, 8730.0], [41.2, 8730.0], [41.3, 8730.0], [41.4, 8752.0], [41.5, 8752.0], [41.6, 8752.0], [41.7, 8752.0], [41.8, 8752.0], [41.9, 8752.0], [42.0, 8806.0], [42.1, 8806.0], [42.2, 8806.0], [42.3, 8806.0], [42.4, 8806.0], [42.5, 8806.0], [42.6, 8806.0], [42.7, 8855.0], [42.8, 8855.0], [42.9, 8855.0], [43.0, 8855.0], [43.1, 8855.0], [43.2, 8855.0], [43.3, 8855.0], [43.4, 8857.0], [43.5, 8857.0], [43.6, 8857.0], [43.7, 8857.0], [43.8, 8857.0], [43.9, 8857.0], [44.0, 8866.0], [44.1, 8866.0], [44.2, 8866.0], [44.3, 8866.0], [44.4, 8866.0], [44.5, 8866.0], [44.6, 8866.0], [44.7, 8877.0], [44.8, 8877.0], [44.9, 8877.0], [45.0, 8877.0], [45.1, 8877.0], [45.2, 8877.0], [45.3, 8877.0], [45.4, 8888.0], [45.5, 8888.0], [45.6, 8888.0], [45.7, 8888.0], [45.8, 8888.0], [45.9, 8888.0], [46.0, 8954.0], [46.1, 8954.0], [46.2, 8954.0], [46.3, 8954.0], [46.4, 8954.0], [46.5, 8954.0], [46.6, 8954.0], [46.7, 8990.0], [46.8, 8990.0], [46.9, 8990.0], [47.0, 8990.0], [47.1, 8990.0], [47.2, 8990.0], [47.3, 8990.0], [47.4, 9140.0], [47.5, 9140.0], [47.6, 9140.0], [47.7, 9140.0], [47.8, 9140.0], [47.9, 9140.0], [48.0, 9173.0], [48.1, 9173.0], [48.2, 9173.0], [48.3, 9173.0], [48.4, 9173.0], [48.5, 9173.0], [48.6, 9173.0], [48.7, 9223.0], [48.8, 9223.0], [48.9, 9223.0], [49.0, 9223.0], [49.1, 9223.0], [49.2, 9223.0], [49.3, 9223.0], [49.4, 9301.0], [49.5, 9301.0], [49.6, 9301.0], [49.7, 9301.0], [49.8, 9301.0], [49.9, 9301.0], [50.0, 9313.0], [50.1, 9313.0], [50.2, 9313.0], [50.3, 9313.0], [50.4, 9313.0], [50.5, 9313.0], [50.6, 9313.0], [50.7, 9345.0], [50.8, 9345.0], [50.9, 9345.0], [51.0, 9345.0], [51.1, 9345.0], [51.2, 9345.0], [51.3, 9345.0], [51.4, 9365.0], [51.5, 9365.0], [51.6, 9365.0], [51.7, 9365.0], [51.8, 9365.0], [51.9, 9365.0], [52.0, 9415.0], [52.1, 9415.0], [52.2, 9415.0], [52.3, 9415.0], [52.4, 9415.0], [52.5, 9415.0], [52.6, 9415.0], [52.7, 9452.0], [52.8, 9452.0], [52.9, 9452.0], [53.0, 9452.0], [53.1, 9452.0], [53.2, 9452.0], [53.3, 9452.0], [53.4, 9485.0], [53.5, 9485.0], [53.6, 9485.0], [53.7, 9485.0], [53.8, 9485.0], [53.9, 9485.0], [54.0, 9520.0], [54.1, 9520.0], [54.2, 9520.0], [54.3, 9520.0], [54.4, 9520.0], [54.5, 9520.0], [54.6, 9520.0], [54.7, 9530.0], [54.8, 9530.0], [54.9, 9530.0], [55.0, 9530.0], [55.1, 9530.0], [55.2, 9530.0], [55.3, 9530.0], [55.4, 9551.0], [55.5, 9551.0], [55.6, 9551.0], [55.7, 9551.0], [55.8, 9551.0], [55.9, 9551.0], [56.0, 9608.0], [56.1, 9608.0], [56.2, 9608.0], [56.3, 9608.0], [56.4, 9608.0], [56.5, 9608.0], [56.6, 9608.0], [56.7, 9681.0], [56.8, 9681.0], [56.9, 9681.0], [57.0, 9681.0], [57.1, 9681.0], [57.2, 9681.0], [57.3, 9681.0], [57.4, 9729.0], [57.5, 9729.0], [57.6, 9729.0], [57.7, 9729.0], [57.8, 9729.0], [57.9, 9729.0], [58.0, 9743.0], [58.1, 9743.0], [58.2, 9743.0], [58.3, 9743.0], [58.4, 9743.0], [58.5, 9743.0], [58.6, 9743.0], [58.7, 9797.0], [58.8, 9797.0], [58.9, 9797.0], [59.0, 9797.0], [59.1, 9797.0], [59.2, 9797.0], [59.3, 9797.0], [59.4, 9817.0], [59.5, 9817.0], [59.6, 9817.0], [59.7, 9817.0], [59.8, 9817.0], [59.9, 9817.0], [60.0, 9852.0], [60.1, 9852.0], [60.2, 9852.0], [60.3, 9852.0], [60.4, 9852.0], [60.5, 9852.0], [60.6, 9852.0], [60.7, 9900.0], [60.8, 9900.0], [60.9, 9900.0], [61.0, 9900.0], [61.1, 9900.0], [61.2, 9900.0], [61.3, 9900.0], [61.4, 10087.0], [61.5, 10087.0], [61.6, 10087.0], [61.7, 10087.0], [61.8, 10087.0], [61.9, 10087.0], [62.0, 10102.0], [62.1, 10102.0], [62.2, 10102.0], [62.3, 10102.0], [62.4, 10102.0], [62.5, 10102.0], [62.6, 10102.0], [62.7, 10107.0], [62.8, 10107.0], [62.9, 10107.0], [63.0, 10107.0], [63.1, 10107.0], [63.2, 10107.0], [63.3, 10107.0], [63.4, 10127.0], [63.5, 10127.0], [63.6, 10127.0], [63.7, 10127.0], [63.8, 10127.0], [63.9, 10127.0], [64.0, 10140.0], [64.1, 10140.0], [64.2, 10140.0], [64.3, 10140.0], [64.4, 10140.0], [64.5, 10140.0], [64.6, 10140.0], [64.7, 10161.0], [64.8, 10161.0], [64.9, 10161.0], [65.0, 10161.0], [65.1, 10161.0], [65.2, 10161.0], [65.3, 10161.0], [65.4, 10198.0], [65.5, 10198.0], [65.6, 10198.0], [65.7, 10198.0], [65.8, 10198.0], [65.9, 10198.0], [66.0, 10347.0], [66.1, 10347.0], [66.2, 10347.0], [66.3, 10347.0], [66.4, 10347.0], [66.5, 10347.0], [66.6, 10347.0], [66.7, 10437.0], [66.8, 10437.0], [66.9, 10437.0], [67.0, 10437.0], [67.1, 10437.0], [67.2, 10437.0], [67.3, 10437.0], [67.4, 10549.0], [67.5, 10549.0], [67.6, 10549.0], [67.7, 10549.0], [67.8, 10549.0], [67.9, 10549.0], [68.0, 10656.0], [68.1, 10656.0], [68.2, 10656.0], [68.3, 10656.0], [68.4, 10656.0], [68.5, 10656.0], [68.6, 10656.0], [68.7, 10748.0], [68.8, 10748.0], [68.9, 10748.0], [69.0, 10748.0], [69.1, 10748.0], [69.2, 10748.0], [69.3, 10748.0], [69.4, 10927.0], [69.5, 10927.0], [69.6, 10927.0], [69.7, 10927.0], [69.8, 10927.0], [69.9, 10927.0], [70.0, 11103.0], [70.1, 11103.0], [70.2, 11103.0], [70.3, 11103.0], [70.4, 11103.0], [70.5, 11103.0], [70.6, 11103.0], [70.7, 11561.0], [70.8, 11561.0], [70.9, 11561.0], [71.0, 11561.0], [71.1, 11561.0], [71.2, 11561.0], [71.3, 11561.0], [71.4, 11576.0], [71.5, 11576.0], [71.6, 11576.0], [71.7, 11576.0], [71.8, 11576.0], [71.9, 11576.0], [72.0, 11752.0], [72.1, 11752.0], [72.2, 11752.0], [72.3, 11752.0], [72.4, 11752.0], [72.5, 11752.0], [72.6, 11752.0], [72.7, 11788.0], [72.8, 11788.0], [72.9, 11788.0], [73.0, 11788.0], [73.1, 11788.0], [73.2, 11788.0], [73.3, 11788.0], [73.4, 11897.0], [73.5, 11897.0], [73.6, 11897.0], [73.7, 11897.0], [73.8, 11897.0], [73.9, 11897.0], [74.0, 11946.0], [74.1, 11946.0], [74.2, 11946.0], [74.3, 11946.0], [74.4, 11946.0], [74.5, 11946.0], [74.6, 11946.0], [74.7, 11990.0], [74.8, 11990.0], [74.9, 11990.0], [75.0, 11990.0], [75.1, 11990.0], [75.2, 11990.0], [75.3, 11990.0], [75.4, 12007.0], [75.5, 12007.0], [75.6, 12007.0], [75.7, 12007.0], [75.8, 12007.0], [75.9, 12007.0], [76.0, 12108.0], [76.1, 12108.0], [76.2, 12108.0], [76.3, 12108.0], [76.4, 12108.0], [76.5, 12108.0], [76.6, 12108.0], [76.7, 12148.0], [76.8, 12148.0], [76.9, 12148.0], [77.0, 12148.0], [77.1, 12148.0], [77.2, 12148.0], [77.3, 12148.0], [77.4, 12190.0], [77.5, 12190.0], [77.6, 12190.0], [77.7, 12190.0], [77.8, 12190.0], [77.9, 12190.0], [78.0, 12190.0], [78.1, 12211.0], [78.2, 12211.0], [78.3, 12211.0], [78.4, 12211.0], [78.5, 12211.0], [78.6, 12211.0], [78.7, 12310.0], [78.8, 12310.0], [78.9, 12310.0], [79.0, 12310.0], [79.1, 12310.0], [79.2, 12310.0], [79.3, 12310.0], [79.4, 12354.0], [79.5, 12354.0], [79.6, 12354.0], [79.7, 12354.0], [79.8, 12354.0], [79.9, 12354.0], [80.0, 12354.0], [80.1, 12358.0], [80.2, 12358.0], [80.3, 12358.0], [80.4, 12358.0], [80.5, 12358.0], [80.6, 12358.0], [80.7, 12361.0], [80.8, 12361.0], [80.9, 12361.0], [81.0, 12361.0], [81.1, 12361.0], [81.2, 12361.0], [81.3, 12361.0], [81.4, 12382.0], [81.5, 12382.0], [81.6, 12382.0], [81.7, 12382.0], [81.8, 12382.0], [81.9, 12382.0], [82.0, 12382.0], [82.1, 12437.0], [82.2, 12437.0], [82.3, 12437.0], [82.4, 12437.0], [82.5, 12437.0], [82.6, 12437.0], [82.7, 12524.0], [82.8, 12524.0], [82.9, 12524.0], [83.0, 12524.0], [83.1, 12524.0], [83.2, 12524.0], [83.3, 12524.0], [83.4, 12524.0], [83.5, 12524.0], [83.6, 12524.0], [83.7, 12524.0], [83.8, 12524.0], [83.9, 12524.0], [84.0, 12524.0], [84.1, 12538.0], [84.2, 12538.0], [84.3, 12538.0], [84.4, 12538.0], [84.5, 12538.0], [84.6, 12538.0], [84.7, 12574.0], [84.8, 12574.0], [84.9, 12574.0], [85.0, 12574.0], [85.1, 12574.0], [85.2, 12574.0], [85.3, 12574.0], [85.4, 12675.0], [85.5, 12675.0], [85.6, 12675.0], [85.7, 12675.0], [85.8, 12675.0], [85.9, 12675.0], [86.0, 12675.0], [86.1, 12726.0], [86.2, 12726.0], [86.3, 12726.0], [86.4, 12726.0], [86.5, 12726.0], [86.6, 12726.0], [86.7, 12840.0], [86.8, 12840.0], [86.9, 12840.0], [87.0, 12840.0], [87.1, 12840.0], [87.2, 12840.0], [87.3, 12840.0], [87.4, 12883.0], [87.5, 12883.0], [87.6, 12883.0], [87.7, 12883.0], [87.8, 12883.0], [87.9, 12883.0], [88.0, 12883.0], [88.1, 12887.0], [88.2, 12887.0], [88.3, 12887.0], [88.4, 12887.0], [88.5, 12887.0], [88.6, 12887.0], [88.7, 12896.0], [88.8, 12896.0], [88.9, 12896.0], [89.0, 12896.0], [89.1, 12896.0], [89.2, 12896.0], [89.3, 12896.0], [89.4, 12914.0], [89.5, 12914.0], [89.6, 12914.0], [89.7, 12914.0], [89.8, 12914.0], [89.9, 12914.0], [90.0, 12914.0], [90.1, 13124.0], [90.2, 13124.0], [90.3, 13124.0], [90.4, 13124.0], [90.5, 13124.0], [90.6, 13124.0], [90.7, 13297.0], [90.8, 13297.0], [90.9, 13297.0], [91.0, 13297.0], [91.1, 13297.0], [91.2, 13297.0], [91.3, 13297.0], [91.4, 13303.0], [91.5, 13303.0], [91.6, 13303.0], [91.7, 13303.0], [91.8, 13303.0], [91.9, 13303.0], [92.0, 13303.0], [92.1, 13437.0], [92.2, 13437.0], [92.3, 13437.0], [92.4, 13437.0], [92.5, 13437.0], [92.6, 13437.0], [92.7, 13485.0], [92.8, 13485.0], [92.9, 13485.0], [93.0, 13485.0], [93.1, 13485.0], [93.2, 13485.0], [93.3, 13485.0], [93.4, 13516.0], [93.5, 13516.0], [93.6, 13516.0], [93.7, 13516.0], [93.8, 13516.0], [93.9, 13516.0], [94.0, 13516.0], [94.1, 13589.0], [94.2, 13589.0], [94.3, 13589.0], [94.4, 13589.0], [94.5, 13589.0], [94.6, 13589.0], [94.7, 13906.0], [94.8, 13906.0], [94.9, 13906.0], [95.0, 13906.0], [95.1, 13906.0], [95.2, 13906.0], [95.3, 13906.0], [95.4, 13918.0], [95.5, 13918.0], [95.6, 13918.0], [95.7, 13918.0], [95.8, 13918.0], [95.9, 13918.0], [96.0, 13918.0], [96.1, 14041.0], [96.2, 14041.0], [96.3, 14041.0], [96.4, 14041.0], [96.5, 14041.0], [96.6, 14041.0], [96.7, 14280.0], [96.8, 14280.0], [96.9, 14280.0], [97.0, 14280.0], [97.1, 14280.0], [97.2, 14280.0], [97.3, 14280.0], [97.4, 14445.0], [97.5, 14445.0], [97.6, 14445.0], [97.7, 14445.0], [97.8, 14445.0], [97.9, 14445.0], [98.0, 14445.0], [98.1, 14498.0], [98.2, 14498.0], [98.3, 14498.0], [98.4, 14498.0], [98.5, 14498.0], [98.6, 14498.0], [98.7, 16788.0], [98.8, 16788.0], [98.9, 16788.0], [99.0, 16788.0], [99.1, 16788.0], [99.2, 16788.0], [99.3, 16788.0], [99.4, 18211.0], [99.5, 18211.0], [99.6, 18211.0], [99.7, 18211.0], [99.8, 18211.0], [99.9, 18211.0], [100.0, 18211.0]], "isOverall": false, "label": "Json Post Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1300.0, "maxY": 6.0, "series": [{"data": [[1300.0, 2.0], [2500.0, 1.0], [2700.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [3700.0, 1.0], [5200.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [6200.0, 2.0], [6300.0, 2.0], [6500.0, 1.0], [6700.0, 3.0], [6800.0, 2.0], [6900.0, 1.0], [7100.0, 2.0], [7000.0, 1.0], [7200.0, 3.0], [7400.0, 2.0], [7600.0, 3.0], [7500.0, 2.0], [7700.0, 3.0], [7800.0, 3.0], [7900.0, 2.0], [8000.0, 4.0], [8100.0, 3.0], [8200.0, 2.0], [8400.0, 2.0], [8600.0, 4.0], [8700.0, 3.0], [8300.0, 1.0], [8500.0, 1.0], [8800.0, 6.0], [9100.0, 2.0], [8900.0, 2.0], [9200.0, 1.0], [9300.0, 4.0], [9400.0, 3.0], [9500.0, 3.0], [9600.0, 2.0], [9700.0, 3.0], [9800.0, 2.0], [10100.0, 6.0], [9900.0, 1.0], [10000.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10700.0, 1.0], [10300.0, 1.0], [10400.0, 1.0], [11100.0, 1.0], [10900.0, 1.0], [11500.0, 2.0], [11700.0, 2.0], [12100.0, 3.0], [12200.0, 1.0], [11900.0, 2.0], [11800.0, 1.0], [12000.0, 1.0], [12300.0, 5.0], [12600.0, 1.0], [12500.0, 4.0], [12700.0, 1.0], [12400.0, 1.0], [12800.0, 4.0], [13100.0, 1.0], [12900.0, 1.0], [13200.0, 1.0], [13300.0, 1.0], [13400.0, 2.0], [13500.0, 2.0], [14000.0, 1.0], [13900.0, 2.0], [14200.0, 1.0], [14400.0, 2.0], [16700.0, 1.0], [18200.0, 1.0]], "isOverall": false, "label": "Json Post Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 148.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 148.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 31.5, "minX": 1.61617668E12, "maxY": 106.52272727272727, "series": [{"data": [[1.61617674E12, 31.5], [1.61617668E12, 106.52272727272727]], "isOverall": false, "label": "Json API Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61617674E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1378.0, "minX": 1.0, "maxY": 18211.0, "series": [{"data": [[2.0, 16788.0], [3.0, 13918.0], [4.0, 14498.0], [5.0, 13516.0], [6.0, 14445.0], [7.0, 14280.0], [8.0, 13906.0], [9.0, 14041.0], [10.0, 12883.0], [11.0, 13437.0], [12.0, 13589.0], [13.0, 12538.0], [14.0, 13485.0], [15.0, 12896.0], [16.0, 12437.0], [17.0, 12887.0], [18.0, 13303.0], [19.0, 13297.0], [20.0, 12310.0], [21.0, 12914.0], [22.0, 12574.0], [23.0, 13124.0], [24.0, 12524.0], [25.0, 12361.0], [26.0, 11946.0], [27.0, 12358.0], [28.0, 12840.0], [29.0, 12726.0], [30.0, 12524.0], [31.0, 12675.0], [33.0, 11576.0], [32.0, 12007.0], [35.0, 12382.0], [34.0, 11897.0], [37.0, 12354.0], [36.0, 12148.0], [39.0, 12190.0], [38.0, 11990.0], [41.0, 11788.0], [40.0, 11752.0], [43.0, 12108.0], [42.0, 12211.0], [45.0, 10927.0], [44.0, 11561.0], [47.0, 10437.0], [46.0, 11103.0], [49.0, 10748.0], [48.0, 10347.0], [51.0, 10087.0], [50.0, 10656.0], [53.0, 9743.0], [52.0, 10549.0], [55.0, 10198.0], [54.0, 10140.0], [57.0, 10127.0], [56.0, 10161.0], [59.0, 9900.0], [58.0, 10107.0], [61.0, 8888.0], [60.0, 10102.0], [63.0, 9452.0], [62.0, 9852.0], [67.0, 9797.0], [66.0, 9415.0], [65.0, 9520.0], [64.0, 9551.0], [71.0, 9345.0], [70.0, 9817.0], [69.0, 8866.0], [68.0, 8855.0], [75.0, 8752.0], [74.0, 8569.0], [73.0, 9608.0], [72.0, 9313.0], [79.0, 8695.0], [78.0, 9681.0], [77.0, 8730.0], [76.0, 9729.0], [83.0, 9365.0], [82.0, 8618.0], [81.0, 8622.0], [80.0, 9223.0], [87.0, 8499.0], [86.0, 8954.0], [85.0, 9485.0], [84.0, 9530.0], [91.0, 8990.0], [90.0, 9173.0], [89.0, 9301.0], [88.0, 8806.0], [95.0, 8857.0], [94.0, 8092.0], [93.0, 8877.0], [92.0, 9140.0], [99.0, 8133.0], [98.0, 8685.0], [97.0, 8730.0], [96.0, 8325.0], [103.0, 8049.0], [102.0, 8476.0], [101.0, 8119.0], [107.0, 7758.0], [106.0, 8186.0], [105.0, 8269.0], [104.0, 8292.0], [111.0, 8052.0], [110.0, 7866.0], [109.0, 7908.0], [108.0, 7739.0], [115.0, 7486.0], [114.0, 7913.0], [113.0, 7564.0], [112.0, 7896.0], [119.0, 7155.0], [118.0, 7778.0], [117.0, 6923.0], [116.0, 7880.0], [123.0, 7651.0], [122.0, 7501.0], [121.0, 7223.0], [120.0, 7243.0], [127.0, 6845.0], [126.0, 7494.0], [125.0, 7600.0], [124.0, 7656.0], [135.0, 6772.0], [134.0, 6332.0], [133.0, 6578.0], [132.0, 6715.0], [131.0, 7129.0], [130.0, 7288.0], [129.0, 6859.0], [128.0, 7059.0], [143.0, 2594.0], [142.0, 5287.0], [141.0, 5821.0], [140.0, 6147.0], [139.0, 6214.0], [138.0, 6278.0], [137.0, 6336.0], [136.0, 6738.0], [150.0, 1378.0], [149.0, 2762.0], [148.0, 1396.0], [147.0, 3500.5], [145.0, 3525.0], [144.0, 3761.0], [1.0, 18211.0]], "isOverall": false, "label": "Json Post Request", "isController": false}, {"data": [[75.51333333333332, 9513.186666666665]], "isOverall": false, "label": "Json Post Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 139.5, "minX": 1.61617668E12, "maxY": 42218.433333333334, "series": [{"data": [[1.61617674E12, 29744.65], [1.61617668E12, 42218.433333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61617674E12, 139.5], [1.61617668E12, 198.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61617674E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 7633.079545454545, "minX": 1.61617668E12, "maxY": 12181.725806451612, "series": [{"data": [[1.61617674E12, 12181.725806451612], [1.61617668E12, 7633.079545454545]], "isOverall": false, "label": "Json Post Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61617674E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5352.545454545454, "minX": 1.61617668E12, "maxY": 6826.645161290323, "series": [{"data": [[1.61617674E12, 6826.645161290323], [1.61617668E12, 5352.545454545454]], "isOverall": false, "label": "Json Post Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61617674E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4278.954545454547, "minX": 1.61617668E12, "maxY": 5057.193548387097, "series": [{"data": [[1.61617674E12, 5057.193548387097], [1.61617668E12, 4278.954545454547]], "isOverall": false, "label": "Json Post Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61617674E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1378.0, "minX": 1.61617668E12, "maxY": 18211.0, "series": [{"data": [[1.61617674E12, 18211.0], [1.61617668E12, 9817.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61617674E12, 14004.1], [1.61617668E12, 9488.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61617674E12, 18211.0], [1.61617668E12, 9817.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61617674E12, 14490.05], [1.61617668E12, 9648.15]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61617674E12, 8888.0], [1.61617668E12, 1378.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61617674E12, 12332.0], [1.61617668E12, 8050.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61617674E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3506.0, "minX": 1.0, "maxY": 17499.5, "series": [{"data": [[32.0, 9198.0], [16.0, 10133.5], [1.0, 17499.5], [17.0, 8170.0], [9.0, 6278.0], [19.0, 12190.0], [5.0, 3506.0], [22.0, 7387.0], [3.0, 6844.5], [7.0, 14041.0], [15.0, 12896.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3385.0, "minX": 1.0, "maxY": 11873.0, "series": [{"data": [[32.0, 7016.5], [16.0, 4793.0], [1.0, 3385.0], [17.0, 6069.0], [9.0, 4129.0], [19.0, 11873.0], [5.0, 3499.0], [22.0, 4836.0], [3.0, 3708.0], [7.0, 4326.0], [15.0, 3837.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.61617668E12, "maxY": 2.5, "series": [{"data": [[1.61617668E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61617668E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.61617668E12, "maxY": 1.4666666666666666, "series": [{"data": [[1.61617674E12, 1.0333333333333334], [1.61617668E12, 1.4666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61617674E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.61617668E12, "maxY": 1.4666666666666666, "series": [{"data": [[1.61617674E12, 1.0333333333333334], [1.61617668E12, 1.4666666666666666]], "isOverall": false, "label": "Json Post Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61617674E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0333333333333334, "minX": 1.61617668E12, "maxY": 1.4666666666666666, "series": [{"data": [[1.61617674E12, 1.0333333333333334], [1.61617668E12, 1.4666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61617674E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

