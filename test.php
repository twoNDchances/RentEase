<?php
// echo bin2hex(strrev(base64_encode(']4]t]4]4]tMtM5]t]tMtM4]4Mu]tMu]tMuMtMu]tMt]t]4Mt]4]tM4MtMu]4Mu]4')));

$key = '3d3d516343746d4d6d6c315669563362';

echo base64_decode(strrev(hex2bin($key)));
