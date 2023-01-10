<?php

use PHPUnit\Framework\TestCase;

class SampleTest extends TestCase
{
    public function testTrueReturnstrue()
    {
        $output = false;
        if(1===1){
            $output = true;
        }

        $this->assertTrue($output);
    }

    public function testCountFailure()

    {
        $testArray = array(1,2,3);
        $this->assertCount(3, $testArray, "foo");
    }
//     /** @test */
//     public function checkIfHasKey(): void
//     {
//         $userArray = [
//             'name' => 'Roger',
//             'age'=>  23,
//         ];


//         $this->assertArrayHasKey('age', $userArray);
//     }
} 