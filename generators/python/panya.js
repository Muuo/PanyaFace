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

/**
 * @fileoverview Generating Python for variable blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Python.variables');

goog.require('Blockly.Python');

Blockly.Python['panya_stop'] = function(block) {
  // Stop the panyabot. Change the value of code to the appropriate python function
  var code = 'PanyaStop()\n';
  return code;
};

Blockly.Python['panya_move'] = function(block) {
  var value_displacement = Blockly.Python.valueToCode(block, 'Displacement', Blockly.Python.ORDER_NONE) || '0';
  var dropdown_direction = block.getTitleValue('Direction');
  // Move the translate the panyabot through the given displacement vector
  var code = 'PanyaMove('+"\'"+dropdown_direction+"\',"+value_displacement+')\n';
  return code;
};

Blockly.Python['panya_turn'] = function(block) {
  var dropdown_direction = block.getTitleValue('direction');
  // Turn the panyabot in the specified direction
  var code = 'PanyaTurn('+"\'"+dropdown_direction+"\')\n";
  return code;
};

Blockly.Python['panya_set_speed'] = function(block) {
  var value_speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_NONE) || '0';
  // Set the panyabot's speed to the given value
  var code = 'PanyaSetSpeed('+"\'"+value_speed+"\')\n";
  return code;
};
