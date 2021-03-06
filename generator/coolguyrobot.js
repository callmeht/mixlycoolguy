'use strict';

goog.provide('Blockly.Arduino.coolguyrobot');

goog.require('Blockly.Arduino');


/*                     其他串口模块                      */
/*设定比较内容*/
Blockly.Arduino.coolguy_serial_content_set = function() {
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  var code = 'CoolGuyModule_StringCmp::SetString('+str3+');\n';
  return code;
};

/*比较内容完全相同*/
Blockly.Arduino.coolguy_serial_content_compare_allsame = function() {
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  Blockly.Arduino.setups_['setup_coolguy_serial2'] = 'Serial.setTimeout(100);\n';
  var code = 'CoolGuyModule_StringCmp:: Compare_StringEqual('+str3+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*比较内容包含*/
Blockly.Arduino.coolguy_serial_content_compare_include = function() {
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  Blockly.Arduino.setups_['setup_coolguy_serial2'] = 'Serial.setTimeout(100);\n';
  var code = 'CoolGuyModule_StringCmp:: Compare_IncludeString ('+str3+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};/*                     其他串口模块结束                   */

/*                       循线模块                          */
/*设置五灰度比较值*/
Blockly.Arduino.coolguy_line_cmp_valueset = function() {
   var num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC);//Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_NONE) || '0';
   var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var num4 = Blockly.Arduino.valueToCode(this, 'num4',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var num5 = Blockly.Arduino.valueToCode(this, 'num5',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine::SetComparisonValue('+num1+','+num2+','+num3+','+num4+','+num5+');\n';
    return code;
};

/*设置五灰度端口*/
Blockly.Arduino.coolguy_line_portset = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine::WalkLine_Init('+dropdown_pin+');\n';
   return code;
};

/*路口过冲设定*/
Blockly.Arduino.coolguy_line_crossroad = function() {
   var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//转速
   var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//路口数
   var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//秒
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine::RunWalkLine('+num2+','+num1+','+num3+');\n';
  return code;
};

/*巡线时间设定*/
Blockly.Arduino.coolguy_line_time = function() {
   var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//转速
   var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//路口数
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine::RunWalkLine_Timer('+num1+','+num2+');\n';
  return code;
};

/*左转弯设定*/
Blockly.Arduino.coolguy_line_turnleft = function() {
   var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//转速
   var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//几线
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine::RunWalkLine_Turn(0,'+num1+','+num2+');\n';
   return code;
};

/*右转弯设定*/
Blockly.Arduino.coolguy_line_turnright  = function() {
   var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//转速
   var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';//几线
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine::RunWalkLine_Turn(1,'+num1+','+num2+');\n';
   return code;
};

/*选择五灰度传感器*/
Blockly.Arduino.coolguy_line_sensorchoose = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine::GrayValue_ReadOne('+dropdown_pin+')';
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};/*                       循线模块结束                          */

/*                      超声波模块                             */
/*一体超声波 置于五灰度传感器上 无需设置端口*/
Blockly.Arduino.coolguy_ultrasonic_already = function() {
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  var code = 'CoolGuyModule_WalkLine::GetUltrasonicVal()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*读扩展超声波距离*/
Blockly.Arduino.coolguy_ultrasonic_setup = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  var code = 'CoolGuyModule_Sensor:: Read_UltrasonicVal ('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};/*                      超声波模块结束                          */

/*                      红外遥控器模块                          */
/*红外遥控器 遥控通道(1~8）  （无、上、下、左、右、上+B、下+B、左+B、右+B）键按下 引脚（IO2、IO3）*/
Blockly.Arduino.coolguy_remotecontrol = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  var dropdown_pin3 = this.getTitleValue('PIN3');
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  Blockly.Arduino.setups_['setup_coolguy_remotecontrol_'+dropdown_pin3]='CoolGuyModule_IR:: IR_Init('+dropdown_pin3+');';
  var code = 'CoolGuyModule_IR::IR_KeyValueCmp('+dropdown_pin2+','+dropdown_pin1+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};/*                      红外遥控器模块结束                          */

/*                    其他传感器模块                     */
/*设置录音模块端口模块*/
Blockly.Arduino.coolguy_record_portsetup = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"record'] = '#include <wtr050.h>';
   Blockly.Arduino.definitions_['define_"record_setup'+dropdown_pin] = 'wtr050 wtr050_1('+dropdown_pin+');';
   var code = '';
   return code;
};

/*开始录音*/
Blockly.Arduino.coolguy_record_start = function() {
  Blockly.Arduino.definitions_['define_"record'] = '#include <wtr050.h>';
  var code = 'wtr050_1.record_start();\n';
  return code;
};

/*停止录音*/
Blockly.Arduino.coolguy_record_stop = function() {
  Blockly.Arduino.definitions_['define_"record'] = '#include <wtr050.h>';
  var code = 'wtr050_1.record_stop();\n';
  return code;
};

/*播放录音*/
Blockly.Arduino.coolguy_record_play = function() {
  Blockly.Arduino.definitions_['define_"record'] = '#include <wtr050.h>';
  var code = 'wtr050_1.play();\n';
  return code;
};

/*环境温度传感器模块*/
Blockly.Arduino.coolguy_temp_get = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_Sensor::Read_Temperature('+dropdown_pin+')';
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/*温度探头模块*/
Blockly.Arduino.coolguy_airtemp = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuyModule_Temperature_Read ds' + dropdown_pin] = 'CoolGuyModule_Temperature_Read ds(' + dropdown_pin +');';
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'ds.readT()';
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*空气质量检测模块*/
Blockly.Arduino.coolguy_airquality = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_Sensor::Read_PM2_5('+dropdown_pin+')';
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/*                    其他传感器模块结束                     */

/*                       电机模块                             */
/*左电机*/
Blockly.Arduino.coolguy_motor_left = function() {
   var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   if (num > 255)
    {
      num=255;
    }
   else if (num < -255)
    {
      num = -255;
    }
   else;
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    var code = 'CoolGuyModule_WalkLine:: LeftMotorSpeed ('+num+');\n';
    return code;
};

/*右电机*/
Blockly.Arduino.coolguy_motor_right = function() {
   var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   if (num > 255)
    {
      num = 255;
    }
   else if (num < -255)
    {
      num = -255;
    } 
   else;
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'CoolGuyModule_WalkLine:: RightMotorSpeed (' + num + ');\n';
   return code;
};/*                       电机模块结束                             */

/*                      LED/OLED模块                        */
/*oled显示英文字符串*/
Blockly.Arduino.coolguy_oled_English = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  Blockly.Arduino.definitions_['define_coolguy_oled1'] = 'CoolGuyModule_OLED OLED;';
  var code = 'OLED.OLED_Print('+dropdown_pin1+','+dropdown_pin2+', '+str3+');\n';
  return code;
};

/*oled显示数字*/
Blockly.Arduino.coolguy_oled_number = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  Blockly.Arduino.definitions_['define_coolguy_oled1'] = 'CoolGuyModule_OLED OLED;';
  var code = 'OLED.OLED_Print('+dropdown_pin1+','+dropdown_pin2+', '+num+');\n';
  return code;
};

/*oled清屏*/
Blockly.Arduino.coolguy_oled_clear = function() {
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  Blockly.Arduino.definitions_['define_coolguy_oled1'] = 'CoolGuyModule_OLED OLED;';
  var code = 'OLED.OLED_CLS();\n';
  return code;
};

/*数码管显示数字*/
Blockly.Arduino.coolguy_Nixietube = function() {
   var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuy'] = '#include <CoolGuy.h>';
   var code = 'CoolGuy_Digital::Set_Digital('+dropdown_pin+', '+num+');\n';
   return code;
};

/*数码管显示时钟*/
Blockly.Arduino.coolguy_Clock = function() {
   var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_"CoolGuy'] = '#include <CoolGuy.h>';
   var code = 'CoolGuy_Digital2::Set_Digital2('+dropdown_pin+', '+num1+','+num2+');\n';
   return code;
};


/*LED灯*/
Blockly.Arduino.coolguy_led = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  Blockly.Arduino.definitions_['define_"Arduino']='#include <Arduino.h>';
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin2]='pinMode('+dropdown_pin2+',OUTPUT);';
  Blockly.Arduino.setups_['setup_input_pull_up'+dropdown_pin2] = 'digitalWrite('+dropdown_pin2+',HIGH);';
  var code = 'digitalWrite('+dropdown_pin2+','+dropdown_pin1+');\n';
  return code;
};/*                      LED/OLED模块结束                        */

/*                      系统模块                             */
/*读模拟引脚*/
Blockly.Arduino.coolguy_analog_reading = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   var code = 'analogRead('+dropdown_pin+')';
   return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*读数字引脚*/
Blockly.Arduino.coolguy_digital_reading = function() {
    var dropdown_pin = this.getTitleValue('PIN');
    Blockly.Arduino.definitions_['define_"Arduino']='#include <Arduino.h>';
    Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    Blockly.Arduino.setups_['setup_input_pull_up'+dropdown_pin] = 'digitalWrite('+dropdown_pin+',HIGH);';
    var code = '!digitalRead('+dropdown_pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*设置PWM端口和输出*/
Blockly.Arduino.coolguy_pwm = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   var pwm_num = this.getTitleValue('PWM_NUM');
   Blockly.Arduino.definitions_['define_"Arduino']='#include <Arduino.h>';
   var code = 'analogWrite('+dropdown_pin+','+pwm_num+');\n';
   return code;
};

/*计时器（毫秒为单位）*/
Blockly.Arduino.coolguy_timer = function() {
  Blockly.Arduino.definitions_['define_"Arduino']='#include <Arduino.h>';
  var code = 'millis()/1000.0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*部分数字端口设为输出*/
// Blockly.Arduino.coolguy_allportInitial = function() {
//   Blockly.Arduino.setups_['setup_input_Initial port2'] = 'pinMode(2, OUTPUT);';
//   Blockly.Arduino.setups_['setup_input_Initial port3'] = 'pinMode(3, OUTPUT);';
//   Blockly.Arduino.setups_['setup_input_Initial port4'] = 'pinMode(4, OUTPUT);';
//   Blockly.Arduino.setups_['setup_input_Initial port12'] = 'pinMode(12, OUTPUT);';
//   Blockly.Arduino.setups_['setup_input_Initial port13'] = 'pinMode(13, OUTPUT);';
//   Blockly.Arduino.setups_['setup_input_Initial port9'] = 'pinMode(9, OUTPUT);';
//   var code = '';
//   return code;
// };/*                      系统模块结束                             */

//********************人工智能***********************
//************* MU摄像头模块***************
var dealy_time= 4000;

Blockly.Arduino.coolguy_mu_setup_type = function() {
    var dropdown_type = this.getTitleValue('PIN1');
    var dropdown_pin = this.getTitleValue('PIN2');
    Blockly.Arduino.definitions_['define_VisionSensor'] = '#include "VisionSensor.h"';
    Blockly.Arduino.definitions_['define_VisionSensor_class'] = 'VisionSensor MU(115200);';
    var code = 'MU.begin('+dropdown_type+');\n';
    code += 'MU.SetPort('+dropdown_pin+');\n';
    return code;
};

Blockly.Arduino.coolguy_mu_data_read = function() {
  Blockly.Arduino.definitions_['define_VisionSensor'] = '#include "VisionSensor.h"';
    Blockly.Arduino.definitions_['define_VisionSensor_class'] = 'VisionSensor MU(115200);';
  Blockly.Arduino.setups_['mu_setup_Initialize'] = 'MU.begin();'; 
  var code = '';
  code += 'MU.Search();\n';
  return code;
};
Blockly.Arduino.coolguy_mu_checktype = function() {
  var dropdown_typel = this.getTitleValue('PIN');
    Blockly.Arduino.definitions_['define_VisionSensor'] = '#include "VisionSensor.h"';
    Blockly.Arduino.definitions_['define_VisionSensor_class'] = 'VisionSensor MU(115200);';
    Blockly.Arduino.setups_['mu_setup_Initialize'] = 'MU.begin();'; 
    var code = 'MU.Detected('+dropdown_typel+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.coolguy_mu_cardtype = function() {
  var dropdown_typel = this.getTitleValue('PIN');
    Blockly.Arduino.definitions_['define_VisionSensor'] = '#include "VisionSensor.h"';
    Blockly.Arduino.definitions_['define_VisionSensor_class'] = 'VisionSensor MU(115200);';
    Blockly.Arduino.setups_['mu_setup_Initialize'] = 'MU.begin();'; 
    var code = 'MU.Detected('+dropdown_typel+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//************* MU摄像头模块结束***************

//***************RTC时钟模块******************
Blockly.Arduino.coolguy_RTC_read = function() {
    var dropdown_rtc = this.getTitleValue('PIN1');
    Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    Blockly.Arduino.definitions_['define_RTC_class'] = 'CoolGuyModule_RTC C_RTC;';
    Blockly.Arduino.setups_['RTC_init'] = 'C_RTC.Initial();'; 
    var code = 'C_RTC.Read_Time('+ dropdown_rtc +')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.coolguy_RTC_set = function() {
   var year = Blockly.Arduino.valueToCode(this, 'year', Blockly.Arduino.ORDER_ATOMIC);//Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_NONE) || '0';
   var month = Blockly.Arduino.valueToCode(this, 'month',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var date = Blockly.Arduino.valueToCode(this, 'date',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var hour = Blockly.Arduino.valueToCode(this, 'hour',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var minute = Blockly.Arduino.valueToCode(this, 'minute',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var second = Blockly.Arduino.valueToCode(this, 'second',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.definitions_['define_iic'] = '#include "iic.h"';
    Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    Blockly.Arduino.definitions_['define_RTC_class'] = 'CoolGuyModule_RTC C_RTC;';
    Blockly.Arduino.setups_['RTC_init'] = 'C_RTC.Initial();'; 
    Blockly.Arduino.setups_['RTC_set'] = 'C_RTC.Set_Time('+year+','+month+','+date+','+hour+','+minute+','+second+');\n';
    var code = '';
    return code;
};
//****************三轴加速度及电子罗盘**********************
Blockly.Arduino.coolguy_threeaxis_xyz = function() {
    var dropdown_xyz = this.getTitleValue('PIN1');
    Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    Blockly.Arduino.definitions_['define_threeaxis_class'] = 'CoolGuyModule_ElectroniccompassandThreeAxis T_Axis;';
    Blockly.Arduino.setups_['threeaxis_init'] = 'T_Axis.Initial();'; 
    var code = 'T_Axis.XYZandHeading_display('+dropdown_xyz+')';

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.coolguy_threeaxis_h = function() {
    Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    Blockly.Arduino.definitions_['define_threeaxis_class'] = 'CoolGuyModule_ElectroniccompassandThreeAxis T_Axis;';
    Blockly.Arduino.setups_['threeaxis_init'] = 'T_Axis.Initial();'; 
    var code = 'T_Axis.XYZandHeading_display_H()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*RGB模块*/
Blockly.Arduino.coolguy_rgb_port = function() {
   var dropdown_pin = this.getTitleValue('PIN');
   Blockly.Arduino.definitions_['define_CoolGuyModule_WS2812'] = 'CoolGuyModule_WS2812 RGB(10);';
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   var code = 'RGB.SetOutput(' + dropdown_pin +');';
   return code;
};

Blockly.Arduino.coolguy_rgb_color = function() {
   var num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC);//Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_NONE) || '0';
   var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var num4 = Blockly.Arduino.valueToCode(this, 'num4',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
   Blockly.Arduino.definitions_['define_CoolGuyModule_WS2812'] = 'CoolGuyModule_WS2812 RGB(10);';
   var code = 'RGB.SetRGB('+num1+','+num2+','+num3+','+num4+');\n';
    return code;
};

//****************WIFI**********************
Blockly.Arduino.COOLGUY_iCloud_Read_String = function() {
  var str = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
  Blockly.Arduino.definitions_['define_iCloud_class'] = 'CoolGuyModule_iCloudMemory WIFI;';
  Blockly.Arduino.setups_['CoolGuyModule_iCloudMemory_init'] = 'WIFI.Serial_Init();'; 
  var code = 'WIFI.iCloud_Read_String('+str+','+pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.COOLGUY_iCloud_Read_Float = function() {
  var str = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var pin = this.getTitleValue('PIN');
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    Blockly.Arduino.definitions_['define_iCloud_class'] = 'CoolGuyModule_iCloudMemory WIFI;';
  Blockly.Arduino.setups_['CoolGuyModule_iCloudMemory_init'] = 'WIFI.Serial_Init();'; 
  var code = 'WIFI.iCloud_Read_Float('+str+','+pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.COOLGUY_iCloud_Write_String = function() {
  var pin = this.getTitleValue('PIN');
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    Blockly.Arduino.definitions_['define_iCloud_class'] = 'CoolGuyModule_iCloudMemory WIFI;';
  Blockly.Arduino.setups_['CoolGuyModule_iCloudMemory_init'] = 'WIFI.Serial_Init();'; 
  var code = 'WIFI.iCloud_Write('+pin+','+str3+');\n';
  return code;
};

Blockly.Arduino.COOLGUY_iCloud_Write_Float = function() {
  var pin = this.getTitleValue('PIN');
  var num = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  Blockly.Arduino.definitions_['define_"CoolGuyRobot'] = '#include "CoolGuyRobot.h"';
    Blockly.Arduino.definitions_['define_iCloud_class'] = 'CoolGuyModule_iCloudMemory WIFI;';
    Blockly.Arduino.setups_['CoolGuyModule_iCloudMemory_init'] = 'WIFI.Serial_Init();'; 
  var code = 'WIFI.iCloud_Write('+pin+','+num+');\n';
  return code;
};