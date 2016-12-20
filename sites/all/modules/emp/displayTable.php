<?php

/**
 * Created by PhpStorm.
 * User: osamamohsen
 * Date: 14/12/16
 * Time: 03:33 م
 */
class displayTable
{

    function get_keys($result){
        $keys = array();
        //$result['node']
        foreach ($result as $res){
            $keys []= $res->nid;
        }
        return $keys;
    }

}