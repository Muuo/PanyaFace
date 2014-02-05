/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Python.variables');

goog.require('Blockly.Python');

Blockly.Python['panya_stop'] = function(block) {
  // Stop the panyabot. Change the value of code to the appropriate python function
  var code = 'panya.PanyaStop()\n';
  if (!Blockly.Python.definitions_['import_panya']) {
	Blockly.Python.definitions_['import_panya'] = 'import panya';
	}
  return code;
};

Blockly.Python['panya_move'] = function(block) {
  // Passed argument is the time for whic we want panya to move
  var dropdown_direction = block.getTitleValue('Direction');
  // Move the translate the panyabot through the given displacement vector
  var code = 'panya.PanyaMove('+"\'"+dropdown_direction+"\')\n";
  if (!Blockly.Python.definitions_['import_panya']){
	Blockly.Python.definitions_['import_panya'] = 'import panya';
	}
  return code;
};

Blockly.Python['panya_turn'] = function(block) {
  var dropdown_direction = block.getTitleValue('direction');
  // Turn the panyabot in the specified direction
  var code = 'panya.PanyaTurn('+"\'"+dropdown_direction+"\')\n";
  if (!Blockly.Python.definitions_['import_panya']) {
	Blockly.Python.definitions_['import_panya'] = 'import panya';
	}
  return code;
};

Blockly.Python['panya_set_speed'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_NONE) || '0';
  // Set the panyabot's speed to the given value
  var code = 'panya.PanyaSetSpeed('+value_speed+")\n";
  if (!Blockly.Python.definitions_['import_panya']) {
	Blockly.Python.definitions_['import_panya'] = 'import panya';
	}
  return code;
};
