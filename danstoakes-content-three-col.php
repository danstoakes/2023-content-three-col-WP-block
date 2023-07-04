<?php
/**
 * Plugin Name:       Three Column Content
 * Plugin URI:        https://github.com/danstoakes/2023-content-three-col-WP-block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dan Stoakes
 * License:           GPL-2.0-or-later
 * Text Domain:       danstoakes-content-three-col
 *
 * @package           danstoakes-content-three-col
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function danstoakes_content_three_col_danstoakes_content_three_col_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'danstoakes_content_three_col_danstoakes_content_three_col_block_init' );
