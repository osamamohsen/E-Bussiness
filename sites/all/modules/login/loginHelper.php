<?php

/**
 * Created by PhpStorm.
 * User: osamamohsen
 * Date: 14/12/16
 * Time: 12:29 م
 */
class loginHelper
{
    protected $table,$id,$field,$value;

    function update_by_ID($table,$colum_condition,$id,$fields){
        $query = db_update($table) // Table name no longer needs {}
        ->fields($fields)
            ->condition($colum_condition, $id)
            ->execute();
        return $query;
    }
}